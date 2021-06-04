import {useEffect} from 'react'
import Player from  './Player'
import FoodComp from './FoodComp'
import InformationPanel from './InformationPanel'


const Map = (props) => {
   
    const map_style = {
        top: props.mapY,
        left: props.mapX       
    }
    
    return (
        <div>
            <div className='map' style={map_style}>
                <Player position_x={props.playerX} position_y={props.playerY}/>
                {props.food_list.map((food)=> {return <FoodComp x={food.x} y={food.y} reachable={food.reachable} key={food.id}/>})}
                <InformationPanel playerX={props.playerX} playerY={props.playerY}/>
            </div>
        </div>
    )
}

export default Map
