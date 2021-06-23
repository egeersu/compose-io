import zombie_standing from "../../assets/zombie/animation/Hurt5.png"
import zombie_dead from "../../assets/zombie/animation/Dead5.png"

import React from 'react'

const ZombieComp = (props) => {

    const reachable = props.reachable ? '5px' : '0px'
    const following = false //props

    const zombie_style = {
        position: 'absolute',
        display: 'flex',
        backgroundImage: props.health > 0 ? `url(${zombie_standing})` : `url(${zombie_dead})`,
        left: props.x,
        top: props.y,
        backgroundSize: 'cover',
        height: props.health > 0 ? '120px' : '60px',
        width: props.health > 0 ? '60px' : '120px',
        opacity: props.health > 0 ? '1.0' : '0.7',
        scale: '20%',
        borderStyle: 'solid',
        borderWidth: reachable,
    }

    const health_bar_style = {
        position: 'relative',
        top: "-50px",
        left: "0",
        height: '30px',
        width: '150px',
        textAlign: 'center',
        backgroundColor: following ? 'red' : 'black'
    }
    

    return (
        <div style={zombie_style}>
            {props.health > 0 ? <h1 style={health_bar_style}>{props.health}</h1> : null}
            <div className='zombie'></div>
        </div>
    )
}

export default ZombieComp
