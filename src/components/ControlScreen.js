import React from 'react'
import HealthBar from './HealthBar'
import Inventory from './Inventory'
import HungerBar from './HungerBar'

const ControlScreen = (props) => {

    const control_screen_style = {
        position: 'absolute',
        top: '650px',
        left: '500px'
    }

    return (
        <div className='control-screen' style={control_screen_style}>
            <HungerBar hunger={props.playerHunger}/>
            <HealthBar health={props.playerHealth}/>
            <Inventory inventory={props.inventory} consumeFood={props.consumeFood} consumeWeapon={props.consumeWeapon}/>
        </div>
    )
}

export default ControlScreen
