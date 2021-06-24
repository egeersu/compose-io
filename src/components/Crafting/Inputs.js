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
        <div style={inputsStyle}>
            {boxes}
        </div>
    )
}

export default Inputs