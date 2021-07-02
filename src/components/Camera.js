import {map_width, map_height} from '../config'
import Map from './Map/Map'
import ControlScreen from './Map/ControlScreen'
import {useState} from 'react'

const Camera = (props) => {

    const [weaponHovered, setweaponHovered] = useState()
    const [foodHovered, setfoodHovered] = useState()

    return (
        <div className='camera'>
            <Map 
                food_list={props.food_list} 
                weapon_list={props.weapon_list}
                zombies={props.zombies}
                playerX={props.playerX} 
                playerY={props.playerY}
                direction={props.direction}
                frame={props.frame}
                mapX = {props.mapX}
                mapY = {props.mapY}
                somethingReachable={props.somethingReachable}
                reachableItem={props.reachableItem}
                weaponHovered={weaponHovered}
                foodHovered={foodHovered}
            />
            <ControlScreen 
                playerHealth={props.playerHealth} 
                playerHunger={props.playerHunger} 
                consumeFood={props.consumeFood} 
                consumeWeapon={props.consumeWeapon} 
                inventory={props.inventory}
                setfoodHovered={setfoodHovered}
                setweaponHovered={setweaponHovered}/> 
        </div>
    )
}

export default Camera
