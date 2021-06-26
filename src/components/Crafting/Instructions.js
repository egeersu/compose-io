import React from 'react'
import { Text } from "react";


const Instructions = (props) => {


    function no_hover() {
        return(
            <>
                <div className='instruction-line'>1. Click any one of your items to use it in crafting.</div>
                <div className='instruction-line'>2. If you click it again on the left panel, you will take your item back.</div>
                <div className='instruction-line'>3. Click the COMPOSE function to combine your items together.</div>
            </>
        )
    }

    return (
        <div className='crafting-instructions'>
            {props.hoverState === 'none' ? no_hover() : null}
        </div>
    )
}

export default Instructions
