import React, {useState, useEffect} from 'react'

import './endscreen.css';

const EndScreen = (props) => {

    const [] = useState(false)

    const AIRTABLE_API_KEY=process.env.REACT_APP_API_KEY

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(props.base_ids[0]);   

    const getGroupCounts = () => {
      return new Promise((resolve, reject)=> {
        base('experiment').select({
          view: 'Grid view'
         }).firstPage(function(err, records) {
           if (err) { console.error(err); return; }
           records.forEach(function(record) {
             const group1_airtable = record.get('Group1');
             const group2_airtable = record.get('Group2');
             const group3_airtable = record.get('Group3');
             const group4_airtable = record.get('Group4');
             resolve([group1_airtable, group2_airtable, group3_airtable, group4_airtable])
          });
        })
      })
    }

    const writeGroupCounts = (groupCounts) => {

      return new Promise((resolve, reject)=>{
        const group1_airtable = groupCounts[0]
        const group2_airtable = groupCounts[1]
        const group3_airtable = groupCounts[2]
        const group4_airtable = groupCounts[3]

        base('experiment').update([
            {
              "id": "rec4HXVuTznpyvNRG",
              "fields": {
                "Group1": props.group === 1 ? group1_airtable + 1 : group1_airtable,
                "Group2": props.group === 2 ? group2_airtable + 1 : group2_airtable,
                "Group3": props.group === 3 ? group3_airtable + 1 : group3_airtable,
                "Group4": props.group === 4 ? group4_airtable + 1 : group4_airtable
              }
            }
          ], function(err, records) {
            if (err) {
              console.error(err);
              return;
            }
            records.forEach(function(record) {
              console.log(record.get('Group1'));
              console.log(record.get('Group2'));
              console.log(record.get('Group3'));
              console.log(record.get('Group4'));
            });
          })
          resolve('done! hehe')  
      })
    }

    useEffect(()=>{
        getGroupCounts().then(res2 => {
          writeGroupCounts(res2)
        })
    }, [])

    const style1 = {
        height: window.innerHeight,
        width: window.innerWidth
    }

    return (
        <div className='end-screen' style={style1}>
            
            <div className='end-title-div'>
                <div className='zombies-icon'></div>
                <h1 className='title'>COMPOSE.IO</h1>
                <div className='player-icon'></div>
            </div>
            
            
            <div className='thank-div'>
                <h1 className='thank-title'>YOU SURVIVED!</h1>
                <p className='thank-text'> Thank you for participating!</p>
                <p className='thank-text'> Your data has been recorded.</p>
            </div>
      </div>
    )
}

export default EndScreen
