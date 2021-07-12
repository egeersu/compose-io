import React, {useState} from 'react'

import './screen.css';

const MainScreen = (props) => {

    return (
        <div className='main-screen'>
            <h1 className='title'>COMPOSE.IO</h1>
            <div className='break'></div>
            <button className='arrow-char' onClick={props.nextPhase}>START</button>
        </div>
    )
}

export default MainScreen
