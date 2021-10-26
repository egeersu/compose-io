import React, {useState, useEffect} from 'react'

import './endscreen.css';

const EndScreen = (props) => {

    const [] = useState(false)

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
