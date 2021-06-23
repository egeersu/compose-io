import {useState} from 'react'
import idle_boi from "../../assets/walker.png"

import WeaponRange from "./WeaponRange"

const Player = (props) => {

    const avatar_style = {
    
        display: 'inline-block',
        //backgroundColor: 'red',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        backgroundImage: `url(${idle_boi})`,
        // avatar position
        position: 'absolute',
        top: props.position_y,
        left: props.position_x,

        // Avatar Shape Features 
        height: '100px',
        width: '100px',

        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'black',
        borderRadius: '50%'          
    }



    // you can add health bar or stuff here (also for enemies)
    return (
        <div>
            <div className='player-avatar' style={avatar_style}></div>
            <WeaponRange x={props.position_x} y={props.position_y} weapon_hovered={props.weapon_hovered}/>
        </div>
    )
}

export default Player
