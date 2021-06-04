import {useState} from 'react'
import camouflage from "../assets/camouflage.png"

const Player = (props) => {

    const avatar_style = {
    
        display: 'inline-block',
        backgroundColor: 'red',
        backgroundRepeat: 'no-repeat',

        backgroundImage: `url(${camouflage})`,
        // avatar position
        position: 'absolute',
        top: props.position_y,
        left: props.position_x,

        // Avatar Shape Features 
        height: '50px',
        width: '50px',

        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
        borderRadius: '50%'          
    }

    // you can add health bar or stuff here (also for enemies)
    return (
        <div>
            <div className='player-avatar' style={avatar_style}></div>
        </div>
    )
}

export default Player
