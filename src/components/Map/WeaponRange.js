import React from 'react'
import target_image from "../../assets/target.png"
import {weapons} from "../../config"

const WeaponRange = (props) => {

    var weapon_range = 0
    if (props.weaponHovered) {weapon_range = weapons[props.weaponHovered].range}
    if (props.weaponHovered === 'weapon3') {weapon_range += 100}
    if (props.weaponHovered === 'weapon4') {weapon_range += 200}
    
    const range_style = {
        position: 'absolute',
        left: props.x - (weapon_range-130)/2, 
        top: props.y - (weapon_range-130)/2,
        width: weapon_range + 'px',
        height: weapon_range + 'px',
        backgroundColor: 'rgb(27, 26, 26, 0.7)',
        borderStyle: 'solid',
        borderRadius: '50%',
        borderColor: 'red',
        borderWidth: '0px',
        //backgroundImage: `url(${target_image})`,
        backgroundSize: 'cover',
        opacity: '70%'
    }

    return (
        <div>
            {props.weaponHovered !== null ? <div className='weapon-range' style={range_style}></div> : null}
        </div>
    )
}

export default WeaponRange
