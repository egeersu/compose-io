import React, {useState, useEffect} from 'react'
import HealthBar from './HealthBar'
import Inventory from './Inventory'
import HungerBar from './HungerBar'

const ControlScreen = (props) => {


    const [h, seth] = useState(window.innerHeight) 
    const [w, setw] = useState(window.innerWidth)

    const control_screen_style = {
        position: 'absolute',
        top: (h*0.75) + 'px',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
    }

    useEffect(() => {
        const handle_resize = (e) => {
            console.log('resized to: ', window.innerWidth, ', ', window.innerHeight)
            setw(window.innerWidth)  
            seth(window.innerHeight)
            //TODO: Fix Bar Size
        }
        window.addEventListener('resize', handle_resize)
    }, [window.innerWidth, window.innerHeight])

    return (
        <div className='control-screen' style={control_screen_style}>
            <HungerBar hunger={props.playerHunger}/> 
            <HealthBar health={props.playerHealth}/> 
            <Inventory 
                inventory={props.inventory} 
                consumeFood={props.consumeFood} 
                consumeWeapon={props.consumeWeapon}
                setweaponHovered={props.setweaponHovered}
                setfoodHovered={props.setfoodHovered}
            />
        </div>
    )
}

export default ControlScreen
