import React, {useState} from 'react'
import Inputs from './Inputs'
import Outputs from './Outputs'
import Materials from './Materials'
import Instructions from './Instructions'
import {useCraft} from './useCraft'
import './Crafting.css'

const CraftingScreen = (props) => {

    const [hoverState, sethoverState] = useState('none')

    const inventory_div_style= {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const [inputList, outputList, success, addItem, removeItem, collectItem, craft] = useCraft(props.inventory)

    return (
        <div className='crafting-screen'>
            <div className='expressions-div'>
                <div className='inputs-box'>
                    <Inputs inventory={props.inventory} inputList={inputList} removeItem={removeItem}/>
                </div>
                <button className='compose' onClick={()=>craft()}>COMPOSE</button>
                <div className='inputs-box'>
                    <Outputs inventory={props.inventory} outputList={outputList} collectItem={collectItem} success={success}/>
                </div>
            </div>
            <div style={inventory_div_style}> 
                <Materials inventory={props.inventory} addItem={addItem}/>
            </div>
            <Instructions hoverState={hoverState}/>
        </div>
    )
}   

export default CraftingScreen
