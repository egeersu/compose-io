import {map_width, map_height} from '../config'
import Map from './Map/Map'
import ControlScreen from './Map/ControlScreen'
import {useState} from 'react'
import HealthBar from './Map/HealthBar'
import HungerBar from './Map/HungerBar'
import Information from './Map/Information'
import GameTimer from './GameTimer'
import MessageBox from './MessageBox'


const Camera = (props) => {

    const [weaponHovered, setweaponHovered] = useState()
    const [foodHovered, setfoodHovered] = useState()
    const [itemHovered, setitemHovered] = useState(null)

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
            <HealthBar playerHealth={props.playerHealth}/>
            <HungerBar playerHunger={props.playerHunger}/>
            <Information itemHovered={itemHovered}/>
            <ControlScreen 
                playerHealth={props.playerHealth} 
                playerHunger={props.playerHunger} 
                consumeFood={props.consumeFood} 
                consumeWeapon={props.consumeWeapon} 
                inventory={props.inventory}
                setfoodHovered={setfoodHovered}
                setweaponHovered={setweaponHovered}
                itemHovered={itemHovered}
                setitemHovered={setitemHovered}/> 
            <GameTimer gameTime={props.gameTime}/>
            <div className='header'>
                <h1 className='header-title'>COMPOSE.IO</h1>
            </div>
            <MessageBox setfrozen={props.setfrozen} tutorialCompleted={props.tutorialCompleted} settutorialCompleted={props.settutorialCompleted}/>
        </div>
    )
}

export default Camera
