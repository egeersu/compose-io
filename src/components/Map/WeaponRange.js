import React from 'react'
import target_image from "../../assets/target.png"


const WeaponRange = (props) => {

    const range_style = {
        display: 'None',
        position: 'absolute',
        left: props.x - 70,
        top: props.y - 70,
        backgroundColor: 'rgb(27, 26, 26, 0.7)',
        borderStyle: 'solid',
        borderRadius: '50%',
        borderColor: 'red',
        borderWidth: '0px',
        backgroundImage: `url(${target_image})`,
        backgroundSize: 'cover',
        opacity: '70%'
    }

    return (
        <div>
            <div className='weapon-range' style={range_style}></div>
        </div>
    )
}

export default WeaponRange
