import React from 'react'
import { Text } from "react";


const Instructions = (props) => {


    function no_hover() {
        return(
            <div className='instructions-block'>
                <div className='instruction-line'>1. Click any one of your items above to use it in crafting.</div>
                <div className='instruction-line'>2. You can take your item back by clicking on it on the left panel. </div>
                <div className='instruction-line'>3. Click the COMPOSE function to combine your items together! </div>
                <div className='instruction-line'>4. When you are done crafting, click the button below to start the new level. </div>

            </div>
        )
    }

    return (
        <div className='crafting-instructions'>
            {props.hoverState === 'none' ? no_hover() : null}
        </div>
    )
}

export default Instructions
