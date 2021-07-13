import {useState} from 'react'
import {input_size, output_size, images} from '../../config'

const Inputs = (props) => {

    const inputsStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: (Math.max(input_size, output_size) * 8) + 'rem',
        height: '8rem',
        backgroundColor: 'grey',
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: '1px'
    }
    const boxes = []

    for (var i=0; i<input_size; i++) {
        var background_image = null
        if (i < props.inputList.length) {
            background_image = images[props.inputList[i]]
        }

        var box_style = null
        if (props.inputList[i] === 'food1' ||  props.inputList[i] === 'food2' || props.inputList[i] === 'food3' || props.inputList[i] === 'food4') {
            box_style = {backgroundImage: `url(${background_image})`, backgroundColor: 'rgb(10, 99, 158, 0.5)'}
        }
        if (props.inputList[i] === 'weapon1' ||  props.inputList[i] === 'weapon2' || props.inputList[i] === 'weapon3' || props.inputList[i] === 'weapon4') {
            box_style = {backgroundImage: `url(${background_image})`, backgroundColor: 'rgb(228, 51, 160, 0.5)'}
        }
        
        boxes.push(
            <div className={'input-item'} 
                style={box_style} 
                key={i}
                id={'box'+i}
                onClick={(e) => props.removeItem(e)}>
            </div>
        )
    }

    return (
        <div style={inputsStyle}>
            {boxes}
        </div>
    )
}

export default Inputs