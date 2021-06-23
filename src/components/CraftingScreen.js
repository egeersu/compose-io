import React from 'react'
import Inputs from './CraftingComponents/Inputs'
import Outputs from './CraftingComponents/Outputs'
import Materials from './CraftingComponents/Materials'

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
    
    return (
        <div>
            <div style={expressions_div_style}>
                <Inputs inventory={props.inventory}/>
                <button>COMPOSE!</button>
                <Inputs inventory={props.inventory}/>
            </div>
            <div style={inventory_div_style}> 
                <Materials inventory={props.inventory}/>
            </div>
        </div>

    )
}   

export default CraftingScreen
