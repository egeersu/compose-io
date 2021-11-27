import React, {useState, useEffect} from 'react'
import Inventory from './Inventory'

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
            setw(window.innerWidth)  
            seth(window.innerHeight)
        }
        window.addEventListener('resize', handle_resize)
    }, [window.innerWidth, window.innerHeight])

    return (
        <div className='control-screen' style={control_screen_style}>
            <Inventory 
                inventory={props.inventory} 
                consumeFood={props.consumeFood} 
                consumeWeapon={props.consumeWeapon}
                setweaponHovered={props.setweaponHovered}
                setfoodHovered={props.setfoodHovered}
                setitemHovered={props.setitemHovered}
            />
        </div>
    )
}

export default ControlScreen
