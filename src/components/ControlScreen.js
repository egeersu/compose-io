import React from 'react'
import HealthBar from './HealthBar'
import Inventory from './Inventory'

const ControlScreen = (props) => {
    return (
        <div>
            <HealthBar health={props.playerHealth}/>
            <Inventory inventory={props.inventory}/>
        </div>
    )
}

export default ControlScreen
