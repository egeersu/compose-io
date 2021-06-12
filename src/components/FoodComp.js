import food_png from "../assets/canned_food.png"
//import food_png from "../assets/Zombie1/animation/Attack1.png"

import React from 'react'

const FoodComp = (props) => {

    const reachable = props.reachable ? '5px' : '0px'

    const food_style = {
        position: 'absolute',
        backgroundImage: `url(${food_png})`,
        left: props.x,
        top: props.y,
        backgroundSize: 'cover',
        borderColor: 'rgb(219, 240, 31)',
        backgroundColor: 'rgb(10,10,10,0.7)',      
        height: '60px',
        width: '60px',
        scale: '20%',
        borderStyle: 'solid',
        borderWidth: reachable,
        borderColor: 'white',
        borderRadius: '50%'          
    }

    return (
        <div>
            <div className='food' style={food_style}></div>
        </div>
    )
}

export default FoodComp
