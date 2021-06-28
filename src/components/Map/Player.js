import WeaponRange from "./WeaponRange"

const Player = (props) => {

    const avatar_style = {
    
        display: 'inline-block',
        //backgroundColor: 'red',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        backgroundColor: 'red',
        //backgroundImage: `url(${idle_boi})`,
        // avatar position
        position: 'absolute',
        top: props.position_y,
        left: props.position_x,

        // Avatar Shape Features 
        height: '70px',
        width: '70px',

        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
        borderRadius: '50%'          
    }

    // you can add health bar or stuff here (also for enemies)
    return (
        <div>
            <div className='player-avatar' style={avatar_style}></div>
            <WeaponRange x={props.position_x} y={props.position_y} weaponHovered={props.weaponHovered}/>
        </div>
    )
}

export default Player
