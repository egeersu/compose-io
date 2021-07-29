import {images} from '../../config'

import React from 'react'


const WeaponComp = (props) => {

    const reachable = props.reachable ? '5px' : '2px'
    const border_color = props.reachable ? 'white' : 'black'

    const weapon_style = {
        position: 'absolute',
        backgroundImage: `url(${images[props.itemName]})`,
        left: props.x,
        top: props.y,
        backgroundSize: 'cover',
        borderColor: 'rgb(219, 240, 31)',
        backgroundColor: 'rgb(228, 51, 160, 0.7)',      
        height: '65px',
        width: '65px',
        scale: '0%',
        borderStyle: 'solid',
        borderWidth: reachable,
        borderColor: border_color,
        borderRadius: '40%'          
    }

    return (
        <div>
            <div className='weapon' style={weapon_style}></div>
        </div>
    )
}

export default WeaponComp
