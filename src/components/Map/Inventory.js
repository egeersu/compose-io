import {weapons, foods} from '../../config'

const Inventory = (props) => {


    const action_bar_style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }

    const mousedOver = (e) => {
        const hovered_item = e.target.id

        if (e.target.id === 'weapon1' || e.target.id === 'weapon2' || e.target.id === 'weapon3' || e.target.id === 'weapon4' ){
            props.setweaponHovered(hovered_item) 
        }
        props.setitemHovered(hovered_item)
    }

    const mouseLeaved = (e) => {
        if (e.target.id === 'weapon1' || e.target.id === 'weapon2' || e.target.id === 'weapon3' || e.target.id === 'weapon4' ){
            props.setweaponHovered(null) 
        }
        props.setitemHovered(null)
    }

    return (
        <div className='action-bar' style={action_bar_style}>
            <div className='item-food' style={{backgroundImage: `url(${foods['food1']['image']})`}} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} onClick={props.consumeFood} id='food1'>{props.inventory['food1']}</div>
            <div className='item-food' style={{backgroundImage: `url(${foods['food2']['image']})`}} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} onClick={props.consumeFood} id='food2'>{props.inventory['food2']}</div>
            <div className='item-food' style={{backgroundImage: `url(${foods['food3']['image']})`}} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} onClick={props.consumeFood} id='food3'>{props.inventory['food3']}</div>
            <div className='item-food' style={{backgroundImage: `url(${foods['food4']['image']})`}} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} onClick={props.consumeFood} id='food4'>{props.inventory['food4']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${weapons['weapon1']['image']})`}} onClick={props.consumeWeapon} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} id='weapon1'>{props.inventory['weapon1']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${weapons['weapon2']['image']})`}} onClick={props.consumeWeapon} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} id='weapon2'>{props.inventory['weapon2']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${weapons['weapon3']['image']})`}} onClick={props.consumeWeapon} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} id='weapon3'>{props.inventory['weapon3']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${weapons['weapon4']['image']})`}} onClick={props.consumeWeapon} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} id='weapon4'>{props.inventory['weapon4']}</div>
        </div>
    )
}

export default Inventory
