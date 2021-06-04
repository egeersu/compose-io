import React from 'react'

const InformationPanel = (props) => {


    const panel_style = {
        position: 'absolute',
        top: props.playerY,
        left: props.playerX,
        width: '200px',
        height: '100px',
        backgroundColor: 'red',
        opacity: 0.8
    }


    return (
        <div>
            <div style={panel_style}>

            </div>
        </div>
    )
}

export default InformationPanel
