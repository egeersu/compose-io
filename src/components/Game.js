import {useState, useEffect} from 'react'
import CraftingScreen from './Crafting/CraftingScreen'
import MainScreen from './MainScreen/MainScreen'
import MessageBox from './MessageBox'

import Camera from './Camera'

import {useItem} from './Map/useItem'
import {useZombie} from './Enemies/useZombie'
import {useKeyPress} from './useKeyPress'
import {useKeyUp} from './useKeyUp'
import {useWalk} from './useWalk'
import {usePlayer} from './usePlayer'

const Game = () => {

    // Browser Specific Adjustments

    // Game Settings
    const [days, setDays] = useState(0) //
    const [gameTime, setgameTime] = useState(0) // use this to keep track of time
    const [phase, setPhase] = useState('game')

    // Initialize Player
    const [mapX, setmapX] = useState(window.innerWidth/2 - 80) //camera/2
    const [mapY, setmapY] = useState(window.innerHeight/2 - 100) //camera/2
    
    const [playerHealth, playerHunger, takeDamage, starve, eat] = usePlayer()

    // Initialize Inventory
    const [inventory, setInventory] = useState({food1:10, food2:10, food3:10, food4:10, weapon1:15, weapon2:10, weapon3:10, weapon4:10})

    // Movement
    const [addDirection, removeDirection, move, playerX, playerY, direction, frame] = useWalk(mapX, setmapX, mapY, setmapY)
   
    // Zombies
    const [zombies, setzombies, updateZombieDistance, get_zombies_in_range] = useZombie()

    // Items
    const [food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon] = useItem(inventory, setInventory, eat, get_zombies_in_range, playerX, playerY, zombies, setzombies)

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
            move()
            check_reachable(playerX, playerY)
            updateZombieDistance(playerX, playerY, takeDamage)
        },12)
        
        return () => {
            clearInterval(gameTimerId)
        }    
      })

    function main_screen() {
        return (
            <>
                <div className='header'>
                    <h1 className='header-title'>COMPOSE.IO</h1>
                </div>
                <div className='main-screen'>
                    <MainScreen />
                </div>
            </>
            )
        }
      

    function crafting_ui(){
        return (
            <>
                <div className='header'>
                        <h1 className='header-title'>COMPOSE.IO</h1>
                </div>
                <CraftingScreen inventory={inventory}/>
            </>
        )
    }

    function game_ui() {
        return(
            <div className='game'>
                <div className='header'>
                    <h1 className='header-title'>COMPOSE.IO</h1>
                </div>
                <Camera 
                    food_list={food_list}
                    weapon_list={weapon_list}
                    zombies={zombies}
                    playerX={playerX} 
                    playerY={playerY}
                    direction={direction}
                    frame={frame}
                    mapX = {mapX}
                    mapY = {mapY}
                    somethingReachable={somethingReachable}
                    reachableItem={reachableItem}
                    playerHealth={playerHealth} 
                    playerHunger={playerHunger} 
                    consumeFood={consumeFood} 
                    consumeWeapon={consumeWeapon} 
                    inventory={inventory}
                />
         </div>
        )
    }

    return (
        <>
        {phase === 'game' ? game_ui() : null }
        {phase === 'crafting' ? crafting_ui() : null}
        {phase === 'main' ? main_screen(): null}
        </>
    )
}

export default Game
