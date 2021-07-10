import React from 'react'

const GameTimer = (props) => {

    const timer_style = {
        backgroundColor: 'rgb(0,0,0,0.7)',
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: '0.4em',
        left: '0.4em',
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
     }

    return (
        <div style={timer_style}>
            <h1>{props.gameTime}</h1>
        </div>
    )
}

export default GameTimer
