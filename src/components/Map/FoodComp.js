import food_png from "../../assets/foods/food1.png"
//import food_png from "../assets/Zombie1/animation/Attack1.png"

import React from 'react'

const FoodComp = (props) => {


    const reachable = props.reachable ? '5px' : '2px'
    const border_color = props.reachable ? 'white' : 'black'
    
    const food_style = {
        position: 'absolute',
        backgroundImage: `url(${food_png})`,
        left: props.x,
        top: props.y,
        backgroundSize: 'cover',
        borderColor: 'rgb(219, 240, 31)',
        backgroundColor: 'rgb(10, 99, 158, 0.7)',      
        height: '65px',
        width: '65px',
        scale: '20%',
        borderStyle: 'solid',
        borderWidth: reachable,
        borderColor: border_color,
        borderRadius: '40%'          
    }

    return (
        <div>
            <div className='food' style={food_style}></div>
        </div>
    )
}



export default FoodComp
