import weapon0_png from "../assets/weapons/weapon0.png"
import weapon1_png from "../assets/weapons/weapon1.png"
import weapon2_png from "../assets/weapons/weapon2.png"
import weapon3_png from "../assets/weapons/weapon3.png"
import weapon4_png from "../assets/weapons/weapon4.png"

import React from 'react'

const WeaponComp = (props) => {

    const reachable = props.reachable ? '5px' : '0px'
    var weapon_asset = ''

    switch (props.itemType) {
        case 'weapon0':
            weapon_asset= weapon0_png;
            break;
        case 'weapon1':
            weapon_asset= weapon1_png;
            break;
        case 'weapon2':
            weapon_asset= weapon2_png;
            break;       
        case 'weapon3':
            weapon_asset= weapon3_png;
            break;
        case 'weapon4':
            weapon_asset= weapon4_png;
            break;
        }

    const weapon_style = {
        position: 'absolute',
        // backgroundImage: `url(${weapon_asset})`,
        backgroundImage: `url(${weapon1_png})`,
        left: props.x,
        top: props.y,
        backgroundSize: 'cover',
        borderColor: 'rgb(219, 240, 31)',
        backgroundColor: 'rgb(10,10,10,0.7)',      
        height: '60px',
        width: '60px',
        scale: '0%',
        borderStyle: 'solid',
        borderWidth: reachable,
        borderColor: 'white',
        borderRadius: '30%'          
    }

    return (
        <div>
            <div className='weapon' style={weapon_style}></div>
        </div>
    )
}

export default WeaponComp
