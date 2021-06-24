import React from 'react'
import {images, input_size, output_size} from '../../config'

const Outputs = (props) => {

    const outputsStyle = {
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

    for (var i=0; i<output_size; i++) {
        var background_image = null
        
        if (i < props.outputList.length) {
            background_image = images[props.outputList[i]]
        }

        boxes.push(
            <div className={'input-item'} // same styling as input currently 
                style={{backgroundImage: `url(${background_image})`}} 
                key={i}
                id={'box'+i}>
            </div>
        )
    }

    return (
        <div className='action-bar' style={outputsStyle}>
            {boxes}
        </div>
    )
}

export default Outputs
