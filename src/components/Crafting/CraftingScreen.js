import React, {useState} from 'react'
import Inputs from './Inputs'
import Outputs from './Outputs'
import Materials from './Materials'
import Instructions from './Instructions'
import {useCraft} from './useCraft'
import './Crafting.css'

const CraftingScreen = (props) => {

    const inventory_div_style= {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25%'
    }
    
    const style1 = {
        height: window.innerHeight,
        width: window.innerWidth
    }

    const [inputList, outputList, success, addItem, removeItem, collectItem, craft, itemHovered, setitemHovered] = useCraft(props.inventory, props.experimentID, props.group, props.day)

    return (
        <div className='crafting-screen' style={style1}>
            <div className='header'>
                    <h1 className='header-title'>COMPOSE.IO</h1>
            </div>
            <div className='expressions-div'>
                <div className='inputs-box'>
                    <Inputs inventory={props.inventory} inputList={inputList} removeItem={removeItem} setitemHovered={setitemHovered}/>
                </div>
                <button className='compose' onClick={()=>craft()}>COMPOSE</button>
                <div className='inputs-box'>
                    <Outputs inventory={props.inventory} outputList={outputList} collectItem={collectItem} success={success} setitemHovered={setitemHovered}/>
                </div>
            </div>
            <div style={inventory_div_style}> 
                <Materials inventory={props.inventory} addItem={addItem} setitemHovered={setitemHovered}/>
            </div>
            <Instructions itemHovered={itemHovered}/>
            <div className='div-enter-world'>
                <button className='enter-world' onClick={()=>{props.nextPhase(); props.resetLevel()}}>ENTER WORLD</button>
            </div>
        </div>
    )
}   

export default CraftingScreen
