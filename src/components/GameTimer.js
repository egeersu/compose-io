import React from 'react'

const GameTimer = (props) => {

    const timer_style = {
        backgroundColor: 'rgb(0,0,0,0.7)',
        width: '90px',
        height: '90px',
        position: 'absolute',
        top: '60px',
        left: '0.4em',
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
     }

     const seconds_to_minutes = (seconds) => {
        var minute = Math.floor(seconds/60)
        var second = seconds % 60
        if (second < 10) {
            second = '0' + second.toString()
        }
        if (minute < 10) {
            minute = '0' + minute.toString()
        }
        return minute.toString() + ':' + second.toString()
     }

    return (
        <div style={timer_style}>
            <h1>{seconds_to_minutes(props.gameTime)}</h1>
        </div>
    )
}

export default GameTimer
