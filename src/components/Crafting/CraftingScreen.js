import React, {useState} from 'react'
import Inputs from './Inputs'
import Outputs from './Outputs'
import Materials from './Materials'
import Instructions from './Instructions'
import {useCraft} from './useCraft'
import PopUp from './PopUp'
import './Crafting.css'

const CraftingScreen = (props) => {

    const [display_message, set_display_message] = useState(false)

    const inventory_div_style= {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25%'
    }
    
    const style1 = {
        height: window.innerHeight,
        width: window.innerWidth,
        opacity: display_message ? '20%' : '100%'
    }

    const [inputList, outputList, success, addItem, removeItem, collectItem, craft, itemHovered, setitemHovered] = useCraft(props.inventory, props.experimentID, props.group, props.day, props.base_ids)

    return (
        <>
            <div className='crafting-screen' style={style1}>
                <div className='header'>
                        <h1 className='header-title'>COMPOSE.IO</h1>
                </div>
                <div className='expressions-div'>
                    <div className='inputs-box'>
                        <Inputs inventory={props.inventory} inputList={inputList} removeItem={removeItem} setitemHovered={setitemHovered}/>
                    </div>
                    <button className='compose' style={{}}onClick={()=>craft()}>CRAFT</button>
                    <div className='inputs-box'>
                        <Outputs inventory={props.inventory} outputList={outputList} collectItem={collectItem} success={success} setitemHovered={setitemHovered}/>
                    </div>
                </div>
                <div style={inventory_div_style}> 
                    <Materials inventory={props.inventory} addItem={addItem} setitemHovered={setitemHovered}/>
                </div>
                <Instructions itemHovered={itemHovered}/>
                <div className='div-enter-world'>
                    <button className='enter-world' onClick={()=>{
                        set_display_message(true)
                        }}>ENTER WORLD</button>
                </div>
            </div>
            <PopUp nextPhase = {props.nextPhase} resetLevel={props.resetLevel} display_message={display_message} set_display_message={set_display_message}/>
        </>

)
}   

export default CraftingScreen
