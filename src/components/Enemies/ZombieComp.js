import zombie_standing from "../../assets/zombie/animation/Hurt5.png"
import zombie_dead from "../../assets/zombie/animation/Dead5.png"

import run1 from "../../assets/zomb/Zombie_walk/Zombie_Walk1.png"
import run2 from "../../assets/zomb/Zombie_walk/Zombie_Walk2.png"
import run3 from "../../assets/zomb/Zombie_walk/Zombie_Walk3.png"
import run4 from "../../assets/zomb/Zombie_walk/Zombie_Walk4.png"
import run5 from "../../assets/zomb/Zombie_walk/Zombie_Walk5.png"
import run6 from "../../assets/zomb/Zombie_walk/Zombie_Walk6.png"
import run7 from "../../assets/zomb/Zombie_walk/Zombie_Walk7.png"
import run8 from "../../assets/zomb/Zombie_walk/Zombie_Walk8.png"
import run9 from "../../assets/zomb/Zombie_walk/Zombie_Walk9.png"


import walk2 from "../../assets/zombie/animation/Walk2.png"
import walk3 from "../../assets/zombie/animation/Walk3.png"
import walk4 from "../../assets/zombie/animation/Walk4.png"
import walk5 from "../../assets/zombie/animation/Walk5.png"
import walk6 from "../../assets/zombie/animation/Walk6.png"



import React from 'react'

const running_animations = {
    0: run1,
    1: run2,
    2: run3,
    3: run4,
    4: run5,
    5: run6,
    6: run7, 
    7: run8,
    8: run9
}

const ZombieComp = (props) => {

    const following = false //props

    const zombie = props.zombie

    const zombie_width = 100
    const zombie_height = 120

    const zombieBackground = running_animations[zombie.runState % 9]


    const zombie_style = {
        position: 'absolute',
        display: 'flex',
        backgroundImage: zombie.alive ? `url(${zombieBackground})` : `url(${run1})`,
        left: zombie.x,
        top: zombie.y,
        backgroundSize: 'cover',
        height: zombie.health > 0 ? zombie_height : zombie_width,
        width: zombie.health > 0 ? zombie_width : zombie_height,
        opacity: zombie.health > 0 ? '1.0' : '0.7',
        scale: '15%',
        transform: zombie.direction === 'right' ? null : 'rotateY(180deg)',
    }


    const healthDiv_style = {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        top: '-50px',
        width: '100%',
        textAlign: 'center',
        width: '100%',
        height: '60px',
    }

    const healthBar_style = {
        position: 'relative',
        display: 'inline-block',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%',
        backgroundColor: 'gray',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '5px',
        transform: zombie.direction === 'right' ? null : 'rotateY(180deg)',
    }

    const healthFluid_style = {
        position: 'absolute',
        width: zombie.health + '%',
        height: '100%',
        backgroundColor: zombie.aggro ? 'red' : 'gray',

    }

    const healthText_style = {
        position: 'absolute',
        fontSize: '30px',
        fontWeight: '600',
        color: 'black',
        width: '100%',
        alignItems: 'center',
    }
    
    return (
        <div style={zombie_style}>
            {zombie.health > 0 ? 
            <div style={healthDiv_style}>
                <div style={healthBar_style}>
                    <div style={healthFluid_style}></div>
                    <div style={healthText_style}>{Math.floor(zombie.health)}</div>
                </div>
            </div> 
        : null}
        </div>
    )
}

export default ZombieComp
