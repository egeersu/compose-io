import React from 'react'
import Inputs from './Inputs'
import Outputs from './Outputs'
import Materials from './Materials'
import {useCraft} from './useCraft'
import './Crafting.css'

const CraftingScreen = (props) => {

    const inventory_div_style= {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const [inputList, outputList, addItem, removeItem, craft] = useCraft(props.inventory)

    return (
        <div className='crafting-screen'>
            <div className='expressions-div'>
                <div className='inputs-box'>
                    <Inputs inventory={props.inventory} inputList={inputList} removeItem={removeItem}/>
                </div>
                <button onClick={()=>craft()}>COMPOSE!</button>
                <div className='inputs-box'>
                    <Outputs inventory={props.inventory} outputList={outputList}/>
                </div>
            </div>
            <div style={inventory_div_style}> 
                <Materials inventory={props.inventory} addItem={addItem}/>
            </div>
        </div>
    )
}   

export default CraftingScreen
