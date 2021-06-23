import {useState, useEffect} from 'react'
import Map from './Map'
import ControlScreen from './ControlScreen'
import CraftingScreen from './CraftingScreen'

import {useItem} from './useItem'
import {useZombie} from './useZombie'
import {useKeyPress} from './useKeyPress'
import {useKeyUp} from './useKeyUp'
import {useWalk} from './useWalk'

import {map_height, map_width} from '../config'

const Game = () => {

    // Browser Specific Adjustments
    const [cameraWidth, setcameraWidth] = useState('50px')
    const [cameraHeight, setcameraHeight] = useState('50px')

    // Game Settings
    const [days, setDays] = useState(0) //
    const [gameTime, setgameTime] = useState(0) // use this to keep track of time
    const [crafting, setCrafting] = useState(true) // if true: display crafting components; if false: display gameplay components

    // Initialize Player
    const [playerHealth, setplayerHealth] = useState(100)
    const [playerHunger, setplayerHunger] = useState(100)
    const [playerX, setplayerX] = useState(500)
    const [playerY, setplayerY] = useState(500)
    const [mapX, setmapX] = useState(250) //camera/2
    const [mapY, setmapY] = useState(-350) //camera/2
    
    // Initialize Inventory
    const [inventory, setInventory] = useState({food1:0, food2:0, food3:0, food4:0, weapon1:15, weapon2:10, weapon3:10, weapon4:10})

    // Movement
    const [addDirection, removeDirection, move] = useWalk(playerX, playerY, setplayerX, setplayerY, mapX, setmapX, mapY, setmapY)
   
    // Zombies
    const [zombie_list, get_zombies_in_range] = useZombie()

    // Items
    const [food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon] = useItem(inventory, setInventory, playerHunger, setplayerHunger, get_zombies_in_range, playerX, playerY)

    useKeyPress((e) => {
        addDirection(e)
        loot_food(e)
        loot_weapon(e)
    })

    useKeyUp((e)=> {
        removeDirection(e)
    })
    
    useEffect(() => {    
        const gameTimerId = setInterval(() => {
            move(check_reachable) // add zombie reachable here
            // enemies act here
          },10)
          return () => {clearInterval(gameTimerId)}    
      }
      )
      
    return (
        <>
        {!crafting ? 
        /* game UI begins here*/
        <div className='game'>
            <div className='header'>
                <h1 className='header-title'>COMPOSE.IO</h1>
            </div>
            <div className='camera' style={{width:{cameraWidth}, height:{cameraHeight}}}>
                <Map 
                food_list={food_list} 
                weapon_list={weapon_list}
                zombie_list={zombie_list}
                playerX={playerX} 
                playerY={playerY}
                mapX = {mapX}
                mapY = {mapY}
                somethingReachable={somethingReachable}
                reachableItem={reachableItem}
                />
            <ControlScreen 
            playerHealth={playerHealth} 
            playerHunger={playerHunger} 
            consumeFood={consumeFood} 
            consumeWeapon={consumeWeapon} 
            inventory={inventory}/> 
            </div>
        </div>
        : /* crafting UI begins here */
        <div className='crafting-screen'>
            <div className='header'>
                <h1 className='header-title'>COMPOSE.IO</h1>
            </div>
            <CraftingScreen 
            inventory={inventory}/>
        </div>
        }
        </>
    )
}

export default Game
