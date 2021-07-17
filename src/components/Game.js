import {useState, useEffect} from 'react'
import CraftingScreen from './Crafting/CraftingScreen'

import MainScreen from './MainScreen/MainScreen'
import EndScreen from './EndScreen/EndScreen'

import MessageBox from './MessageBox'

import Camera from './Camera'

import {useItem} from './Map/useItem'
import {useZombie} from './Enemies/useZombie'
import {useKeyPress} from './useKeyPress'
import {useKeyUp} from './useKeyUp'
import {useWalk} from './useWalk'
import {usePlayer} from './usePlayer'
import {Scheduler} from './Scheduler'

import {Level} from './Level'

import {game_duration} from '../config'

const Game = () => {

    // Experiment Settings
    const [experimentID, setexperimentID] = useState(Math.floor(Math.random() * 1e6))
    const [group, setgroup] = useState(0)

    const [phase, gameTime, day, clockTick, nextPhase] = Scheduler()
    

    const [mapX, setmapX, 
        mapY, setmapY, 
        playerAlive, playerHealth, playerHunger, takeDamage, starve, eat, 
        inventory, setInventory, 
        addDirection, removeDirection, move, playerX, playerY, direction, frame, 
        zombies, setzombies, updateZombieDistance, get_zombies_in_range,
        food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon,
        resetLevel] = Level(day)

    useKeyPress((e) => {
        addDirection(e) 
        loot_food(e)
        loot_weapon(e)
    })

    useKeyUp((e)=> {
        removeDirection(e)
    })

    useEffect(() => {
        if (phase === 'game') {
            const gameTimerId = setInterval(() => {
                move()
                check_reachable(playerX, playerY)
                updateZombieDistance(playerX, playerY, takeDamage)
                starve(0.03)
                clockTick()
            },12)
            
            return () => {
                clearInterval(gameTimerId)
            }                
        }
      })

    function main_screen() {
        return <MainScreen nextPhase={nextPhase}/>
    }
      
    function crafting_ui(){
        return <CraftingScreen inventory={inventory} experimentID={experimentID} group={group} day={day} nextPhase={nextPhase} resetLevel={resetLevel}/>
    }

    function end_screen() {
        return <EndScreen />
    }

    function game_ui() {
        return(
            <div className='game'>
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
                    gameTime={gameTime}
                />
         </div>
        )
    }

    return (
        <>
        {phase === 'game' ? game_ui() : null }
        {phase === 'crafting' ? crafting_ui() : null}
        {phase === 'main' ? main_screen(): null}
        {phase === 'end' ? end_screen(): null}
        </>
    )
}

export default Game
