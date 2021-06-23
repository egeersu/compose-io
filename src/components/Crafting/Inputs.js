import {useState} from 'react'
import {input_size, images} from '../../config'

const Inputs = (props) => {

    const action_bar_style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const clicker_boi = (e)=>{
        console.log('clicked!')
    }

    const boxes = []

    for (var i=0; i<input_size; i++) {
        var background_image = null
        if (i < props.itemList.length) {
            background_image = images[props.itemList[i]]
        }

        boxes.push(
            <div className={'input-item'} 
                style={{backgroundImage: `url(${background_image})`}} 
                key={i}
                id={'box'+i}
                onClick={(e) => props.removeItem(e)}>
            </div>
        )
    }

    return (
        <div className='action-bar' style={action_bar_style}>
            {boxes}
        </div>
    )
}

export default Inputs