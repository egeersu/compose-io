import weapon1_png from "../../assets/weapons/weapon1.png"
// TODO: import from config

import React from 'react'

const WeaponComp = (props) => {

    const reachable = props.reachable ? '5px' : '0px'
    var weapon_asset = ''

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
