import {weapons, foods} from '../../config'

const Inventory = (props) => {


    const action_bar_style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const mousedOver = (e) => {
        const hovered_weapon = e.target.id
        const weapon_range = document.getElementsByClassName('weapon-range')[0]
        weapon_range.style.display = 'block'
        weapon_range.style.height = weapons[hovered_weapon]['range'] + 'px'
        weapon_range.style.width = weapons[hovered_weapon]['range'] + 'px'
        // UPDATE INFORMATION BAR (HOVER)
    }

    const mouseLeaved = (e) => {
        const clicked_weapon = e.target.id
        const weapon_range = document.getElementsByClassName('weapon-range')[0]
        weapon_range.style.display = 'none'
        // REMOVE INFORMATION BAR (HOVER)
    }

    return (
        <div className='action-bar' style={action_bar_style}>
            <div className='item-food' style={{backgroundImage: `url(${foods['food1']['image']})`}} onClick={props.consumeFood} id='food1'>{props.inventory['food1']}</div>
            <div className='item-food' style={{backgroundImage: `url(${foods['food2']['image']})`}} onClick={props.consumeFood} id='food2'>{props.inventory['food2']}</div>
            <div className='item-food' style={{backgroundImage: `url(${foods['food3']['image']})`}} onClick={props.consumeFood} id='food3'>{props.inventory['food3']}</div>
            <div className='item-food' style={{backgroundImage: `url(${foods['food4']['image']})`}} onClick={props.consumeFood} id='food4'>{props.inventory['food4']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${weapons['weapon1']['image']})`}} onClick={props.consumeWeapon} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} id='weapon1'>{props.inventory['weapon1']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${weapons['weapon2']['image']})`}} onClick={props.consumeWeapon} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} id='weapon2'>{props.inventory['weapon2']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${weapons['weapon3']['image']})`}} onClick={props.consumeWeapon} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} id='weapon3'>{props.inventory['weapon3']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${weapons['weapon4']['image']})`}} onClick={props.consumeWeapon} onMouseOver={mousedOver} onMouseLeave={mouseLeaved} id='weapon4'>{props.inventory['weapon4']}</div>
        </div>
    )
}

export default Inventory
