import zombie_standing from "../../assets/zombie/animation/Hurt5.png"
import zombie_dead from "../../assets/zombie/animation/Dead5.png"

import React from 'react'

const ZombieComp = (props) => {

    const following = false //props

    const zombie = props.zombie

    const zombie_width = 60
    const zombie_height = 120

    const zombie_style = {
        position: 'absolute',
        display: 'flex',
        backgroundImage: zombie.health > 0 ? `url(${zombie_standing})` : `url(${zombie_dead})`,
        left: zombie.x,
        top: zombie.y,
        backgroundSize: 'cover',
        height: zombie.health > 0 ? zombie_height : zombie_width,
        width: zombie.health > 0 ? zombie_width : zombie_height,
        opacity: zombie.health > 0 ? '1.0' : '0.7',
        scale: '20%',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: zombie.aggro ? 'red' : 'black'
    }

    const health_bar_style = {
        position: 'relative',
        top: "-50px",
        left: "0",
        height: '30px',
        width: '100%',
        textAlign: 'center',
        backgroundColor: zombie.aggro ? 'red' : 'black'
    }

    /*
    const zombie_aggro = {
        position: 'absolute',
        left: zombie.x,
        top: zombie.y,
        height: '100px',
        width: '100px',
        opacity: '50%',
        backgroundColor: 'red',

    }
    */
    

    return (
        <div style={zombie_style}>
            {zombie.health > 0 ? <h1 style={health_bar_style}>{zombie.health}</h1> : null}
        </div>
    )
}

export default ZombieComp
