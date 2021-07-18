import React from 'react'
import { Text } from "react";
import ItemInfo from './ItemInfo'

const Instructions = (props) => {

    function no_hover() {
        return(
            <div className='crafting-instructions'>
                <div className='instruction-line'>1. You can combine lower level items to craft higher level items.</div>
                <div className='instruction-line'>2. Click any one of your items above to use it in crafting.</div>
                <div className='instruction-line'>3. You can take your item back by clicking on it on the left panel. </div>
                <div className='instruction-line'>4. When you are done crafting, click the button below to start the new level. </div>
            </div>
        )
    }

    function yes_hover() {
        return (
        <div className='crafting-instructions'>
            <div className='instructions-block'>
                    <ItemInfo itemHovered={props.itemHovered}/>
            </div>
        </div>
        )
    }
    

    return (
        <>
            {props.itemHovered === null ? no_hover() : yes_hover()}
        </>
    )

}

export default Instructions
