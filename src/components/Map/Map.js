import {useEffect} from 'react'
import Player from  './Player'
import FoodComp from './FoodComp'
import WeaponComp from './WeaponComp'
import ZombieComp from '../Enemies/ZombieComp'
import LootingPanel from './LootingPanel'
import Bunker from './Bunker/Bunker'
import {map_width, map_height} from '../../config'

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
                <Bunker />
                <Player position_x={props.playerX} position_y={props.playerY} direction={props.direction} frame={props.frame} weaponHovered={props.weaponHovered} foodHovered={props.foodHovered}/>
                {props.food_list.map((food)=> {return <FoodComp x={food.x} y={food.y} reachable={food.reachable} itemType={food.itemType} itemName={food.itemName} key={food.id}/>})}
                {props.weapon_list.map((weapon)=> {return <WeaponComp x={weapon.x} y={weapon.y} reachable={weapon.reachable} itemType={weapon.itemType} itemName={weapon.itemName} key={weapon.id}/>})}
                {Object.entries(props.zombies).map(([zombie_key, zombie_value]) => {return <ZombieComp zombie={zombie_value} key={zombie_key} />})}
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
