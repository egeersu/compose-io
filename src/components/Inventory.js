const Inventory = (props) => {

    const action_bar_style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div className='action-bar' style={action_bar_style}>
            <div className='item-food' onClick={props.consumeFood} id='food1'>{props.inventory['food1']}</div>
            <div className='item-food' onClick={props.consumeFood} id='food2'>{props.inventory['food2']}</div>
            <div className='item-food' onClick={props.consumeFood} id='food3'>{props.inventory['food3']}</div>
            <div className='item-food' onClick={props.consumeFood} id='food4'>{props.inventory['food4']}</div>
            <div className='item-weapon' onClick={props.consumeWeapon} id='weapon1'>{props.inventory['weapon1']}</div>
            <div className='item-weapon' onClick={props.consumeWeapon} id='weapon1'>{props.inventory['weapon2']}</div>
            <div className='item-weapon' onClick={props.consumeWeapon} id='weapon1'>{props.inventory['weapon3']}</div>
            <div className='item-weapon' onClick={props.consumeWeapon} id='weapon1'>{props.inventory['weapon4']}</div>
        </div>
    )
}

export default Inventory
