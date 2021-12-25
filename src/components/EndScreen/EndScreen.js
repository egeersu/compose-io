import React, {useState, useEffect} from 'react'

import './endscreen.css';

const EndScreen = (props) => {

    const [] = useState(false)


    const style1 = {
        height: window.innerHeight,
        width: window.innerWidth
    }

    const [data_saved, set_data_saved] = useState(false)

    const writeGroupCounts = () => {

        var Airtable = require('airtable');
        const AIRTABLE_API_KEY=process.env.REACT_APP_API_KEY
        const airtable_base = 'appWGnhKcDCqpBUzM'
        var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(airtable_base);    
    
        base('ip_list').create([
            {
              "fields": {
                'ip': props.ip
              }
            }
          ], function(err, records) {
            if (err) {
              console.error(err);
              return;
            }
          });
          set_data_saved(true)
        }

    useEffect(() => {
        writeGroupCounts()
    }, [data_saved])


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
                <p className='thank-text'> Completion Code: 6BD98366</p>
                {/* <p className='thank-text'> Your data has been recorded.</p> */}
            </div>
      </div>
    )
}

export default EndScreen
