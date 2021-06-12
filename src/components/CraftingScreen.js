import React from 'react'
import Inputs from './Inputs'
import Outputs from './Outputs'
import CraftingItems from './CraftingItems'

const CraftingScreen = (props) => {
    return (
        <div>
            <CraftingItems />
            <Inputs />
            <button>COMPOSE!</button>
            <Outputs />
            <h1>{props.inventory['food1']}</h1>
        </div>
    )
}   

export default CraftingScreen
