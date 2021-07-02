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

const walking_animations = {
    0: walk4,
    1: walk5,
    2: walk6
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

    const health_bar_style = {
        position: 'relative',
        top: "-50px",
        left: "0",
        height: '30px',
        width: '100%',
        textAlign: 'center',
        backgroundColor: zombie.aggro ? 'red' : 'bladck'
    }


    

    return (
        <div style={zombie_style}>
            {zombie.health > 0 ? <h1 style={health_bar_style}>{zombie.health}</h1> : null}
        </div>
    )
}

export default ZombieComp
