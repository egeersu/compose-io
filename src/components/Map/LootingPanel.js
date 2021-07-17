import React from 'react'

const LootingPanel = (props) => {


    const item_text = {
        food1: 'Food (level 1)',
        food2: 'Food (level 2)',
        food3: 'Food (level 3)',
        food4: 'Food (level 4)',
        weapon1: 'Weapon (level 1)', 
        weapon2: 'Weapon (level 2)',
        weapon3: 'Weapon (level 3)',
        weapon4: 'Weapon (level 4)'
    }

    const top_position = props.playerY + 75
    const left_position = props.playerX - 40

    const panel_style = {
        position: 'relative',
        top: top_position,
        left: left_position,
        width: '250px',
        height: '70px',
        backgroundColor: 'rgba(60, 60, 60, 1)',
        opacity: props.somethingReachable ? '0.9' : '0',
        display: 'flex',
        verticalAlign: 'middle'
    }

    const button_style = {
        position: 'absolute',
        fontSize: '55px',
        height: '70px',
        width: '70px',
        top: '0px',
        left: '0px',
        margin: '0px',
        padding: '0px',
        backgroundColor: 'black',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const name_style = {
        position: 'absolute',
        fontSize: '23px',
        top: '6px',
        left: '90px',
        paddingLeft: '8px',
        justifyContent: 'center',
        color: 'white',
        alignItems: 'center',
    }

    return (
        <div>
            <div style={panel_style}>
                {/* <div style={icon_style}></div> */}
                <h1 style={button_style}>F</h1>
                <h1 style={name_style}>{props.reachableItem ? item_text[props.reachableItem.itemName] : 'no'}</h1>
            </div>
        </div>
    )
}

export default LootingPanel
