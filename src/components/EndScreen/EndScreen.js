import React, {useState, useEffect} from 'react'

import './endscreen.css';

const EndScreen = (props) => {

    const [] = useState(false)

    const AIRTABLE_API_KEY=process.env.REACT_APP_API_KEY
    const AIRTABLE_BASE_ID=process.env.REACT_APP_BASE_ID

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_ID);   

    const getGroupCounts = () => {
      return new Promise((resolve, reject)=> {
        base('experimentTracker').select({
          view: 'Grid view'
         }).firstPage(function(err, records) {
           if (err) { console.error(err); return; }
           records.forEach(function(record) {
             const group1_airtable = record.get('Group1');
             const group2_airtable = record.get('Group2');
             resolve([group1_airtable, group2_airtable])
          });
        })
      })
    }

    const writeGroupCounts = (groupCounts) => {

      return new Promise((resolve, reject)=>{
        const group1_airtable = groupCounts[0]
        const group2_airtable = groupCounts[1]

        base('experimentTracker').update([
            {
              "id": "rechb4FV3hdZ1QwZn",
              "fields": {
                "Group1": props.group === 1 ? group1_airtable + 1 : group1_airtable,
                "Group2": props.group === 2 ? group2_airtable + 1 : group2_airtable
              }
            }
          ], function(err, records) {
            if (err) {
              console.error(err);
              return;
            }
            records.forEach(function(record) {
              console.log(record.get('Group1'));
            });
          })
          resolve('done! hehe')  
      })
    }

    const writeWinner = () => {
      return new Promise((resolve, reject)=>{
        base('winners').create([
          {
            "fields": {
              "experimentID": props.experimentID
            }
          }
        ], function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function (record) {
            console.log(record.getId());
          });
        });
        resolve('winner done')
      })      
    }

    useEffect(()=>{
      writeWinner().then(res1 => {
        getGroupCounts().then(res2 => {
          writeGroupCounts(res2)
        })
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
