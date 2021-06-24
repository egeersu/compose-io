import {images} from '../../config'

const Materials = (props) => {

    const action_bar_style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const clicker_boi = (e)=>{
        if (e.target.className === 'item-food' || e.target.className === 'item-weapon'){
            props.addItem(e.target.id)
        }
    }

    return (
        <div className='action-bar' style={action_bar_style}>
            <div className='item-food' style={{backgroundImage: `url(${images['food1']})`}} onClick={clicker_boi} id='food1'>{props.inventory['food1']}</div>
            <div className='item-food' style={{backgroundImage: `url(${images['food2']})`}} onClick={clicker_boi} id='food2'>{props.inventory['food2']}</div>
            <div className='item-food' style={{backgroundImage: `url(${images['food3']})`}} onClick={clicker_boi} id='food3'>{props.inventory['food3']}</div>
            <div className='item-food' style={{backgroundImage: `url(${images['food4']})`}} onClick={clicker_boi} id='food4'>{props.inventory['food4']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${images['weapon1']})`}} onClick={clicker_boi} id='weapon1'>{props.inventory['weapon1']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${images['weapon2']})`}} onClick={clicker_boi} id='weapon2'>{props.inventory['weapon2']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${images['weapon3']})`}} onClick={clicker_boi} id='weapon3'>{props.inventory['weapon3']}</div>
            <div className='item-weapon' style={{backgroundImage: `url(${images['weapon4']})`}} onClick={clicker_boi} id='weapon4'>{props.inventory['weapon4']}</div>
        </div>
    )
}

export default Materials