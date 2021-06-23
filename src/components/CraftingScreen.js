import React from 'react'
import Inputs from './CraftingComponents/Inputs'
import Outputs from './CraftingComponents/Outputs'
import Materials from './CraftingComponents/Materials'
import {useCraft} from './CraftingComponents/useCraft'

const CraftingScreen = (props) => {


    const expressions_div_style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const inventory_div_style= {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const [itemList, addItem, removeItem] = useCraft(props.inventory)

    return (
        <div>
            <div style={expressions_div_style}>
                <Inputs inventory={props.inventory} itemList={itemList} removeItem={removeItem}/>
                <button onClick={(e)=>console.log(itemList)}>COMPOSE!</button>
                <Inputs inventory={props.inventory} itemList={itemList}/>
            </div>
            <div style={inventory_div_style}> 
                <Materials inventory={props.inventory} addItem={addItem}/>
            </div>
        </div>

    )
}   

export default CraftingScreen
