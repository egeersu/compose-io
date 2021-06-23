import {useEffect} from 'react'
import Player from  './Player'
import FoodComp from './FoodComp'
import WeaponComp from './WeaponComp'
import ZombieComp from './ZombieComp'
import LootingPanel from './LootingPanel'

import {map_width, map_height} from '../config'

const Map = (props) => {
   
    const map_style = {
        top: props.mapY,
        left: props.mapX,
        width: String(map_width) + 'px',
        height: String(map_height) + 'px'
    }

    
    return (
        <div>
            <div className='map' style={map_style}>
                <Player position_x={props.playerX} position_y={props.playerY}/>
                {props.food_list.map((food)=> {return <FoodComp x={food.x} y={food.y} reachable={food.reachable} itemType={food.itemType} key={food.id}/>})}
                {props.weapon_list.map((weapon)=> {return <WeaponComp x={weapon.x} y={weapon.y} reachable={weapon.reachable} itemType={weapon.itemType} key={weapon.id}/>})}
                {props.zombie_list.map((zombie)=> {return <ZombieComp x={zombie.x} y={zombie.y} health={zombie.health} reachable={zombie.reachable} key={zombie.id}/>})}
                <LootingPanel 
                playerX={props.playerX} 
                playerY={props.playerY}
                somethingReachable={props.somethingReachable}
                reachableItem={props.reachableItem}
                />
            </div>
        </div>
    )
}

export default Map
