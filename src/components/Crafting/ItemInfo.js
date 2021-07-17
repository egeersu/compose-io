import React from 'react'
import {foods, weapons} from '../../config'

const ItemInfo = (props) => {

    const information_div = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
    }

    const information_style = {
        width: '100%',
        textAlign: 'center',
        height: '100%',
        backgroundColor: 'black',
        opacity: '0.92'
    }

    const header_color = (item) => {
        if (item) {
            if (item.charAt(0) === 'f') { return 'cyan' }
            if (item.charAt(0) === 'w') { return 'red' }
        }
    }

    const name_style = {
        fontSize: '1.6em',
        color: header_color(props.itemHovered)
    }

    const text_style = {
        fontSize: '1.1em',
        color: 'white'
    }

    const name_text = (item) => {
        if (item === 'food1') {return 'Food (Level 1)'}
        if (item === 'food2') {return 'Food (Level 2)'}
        if (item === 'food3') {return 'Food (Level 3)'}
        if (item === 'food4') {return 'Food (Level 4)'}
        if (item === 'weapon1') {return 'Weapon (Level 1)'}
        if (item === 'weapon2') {return 'Weapon (Level 2)'}
        if (item === 'weapon3') {return 'Weapon (Level 3)'}
        if (item === 'weapon4') {return 'Weapon (Level 4)'}
    }

    const body_text = (item) => {
        if (item === 'food1') {return 'Restores ' + foods['food1'].health + ' Health points and '  + foods['food1'].hunger +  ' Hunger points.'}
        if (item === 'food2') {return 'Restores ' + foods['food2'].health + ' Health points and '  + foods['food2'].hunger +  ' Hunger points.'}
        if (item === 'food3') {return 'Restores ' + foods['food3'].health + ' Health points and '  + foods['food3'].hunger +  ' Hunger points.'}
        if (item === 'food4') {return 'Restores ' + foods['food4'].health + ' Health points and '  + foods['food4'].hunger +  ' Hunger points.'}
        if (item === 'weapon1') {return 'Inflicts ' + weapons['weapon1'].damage +  ' damage to all enemies within range.'}
        if (item === 'weapon2') {return 'Inflicts ' + weapons['weapon2'].damage +  ' damage to all enemies within range.'}
        if (item === 'weapon3') {return 'Inflicts ' + weapons['weapon3'].damage +  ' damage to all enemies within range.'}
        if (item === 'weapon4') {return 'Inflicts ' + weapons['weapon4'].damage +  ' damage to all enemies within range.'}
    }

    return (
        <>
            {props.itemHovered !== null ? 
            <div style={information_div}>
                <div style={information_style}>
                    <h1 style={name_style}>{name_text(props.itemHovered)}</h1>
                    <p style={text_style}>{body_text(props.itemHovered)}</p>
                </div>
            </div> 
            : null
            }
        </>
    )
}

export default ItemInfo
