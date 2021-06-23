import {useState} from 'react'
import {weapons, foods, input_size} from '../../config'

const Inputs = (props) => {

    const action_bar_style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const clicker_boi = (e)=>{
        console.log('clicked!')
    }
    

    return (
        <div className='action-bar' style={action_bar_style}>
            <div className='item-food'></div>
            <div className='input-item'></div>
            <div className='input-item'></div>
            <div className='input-item'></div>
            <div className='input-item'></div>
        </div>
    )
}

export default Inputs