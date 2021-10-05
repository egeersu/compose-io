import {useState, useEffect} from 'react'
import CraftingScreen from './Crafting/CraftingScreen'

import Intro from './Intro/Intro'
import EndScreen from './EndScreen/EndScreen'
import DeadScreen from './DeadScreen/DeadScreen'

import Camera from './Camera'
import {useKeyPress} from './useKeyPress'
import {useKeyUp} from './useKeyUp'
import {Scheduler} from './Scheduler'

import {Level} from './Level'

import {game_duration} from '../config'

const Game = (props) => {

    // console.log('Experiment ID: ', props.experimentID)
    // console.log('Group: ', props.group)

    const [phase, gameTime, day, clockTick, nextPhase, frozen, setfrozen, tutorialCompleted, settutorialCompleted, die] = Scheduler()

    const [mapX, setmapX, 
        mapY, setmapY, 
        playerAlive, playerHealth, playerHunger, takeDamage, starve, eat, 
        inventory, setInventory, 
        addDirection, removeDirection, move, playerX, playerY, direction, frame, 
        zombies, setzombies, updateZombieDistance, get_zombies_in_range,
        food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon,
        resetLevel] = Level(day, props.group, props.experimentID, die)        


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
                if (!frozen) {
                    move()
                    check_reachable(playerX, playerY)
                    updateZombieDistance(playerX, playerY, takeDamage)
                    starve(0.05)    
                }
                clockTick()    
                
            },12)
            
            return () => {
                clearInterval(gameTimerId)
            }                
        }
      })

    function main_screen() {
        return <Intro nextPhase={nextPhase}/>
    }
      
    function crafting_ui(){
        return <CraftingScreen inventory={inventory} experimentID={props.experimentID} group={props.group} day={day} nextPhase={nextPhase} resetLevel={resetLevel}/>
    }

    function end_screen() {
        return <EndScreen group={props.group} experimentID={props.experimentID}/>
    }

    function dead_screen() {
        return <DeadScreen />
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
                    setfrozen={setfrozen}
                    tutorialCompleted={tutorialCompleted}
                    settutorialCompleted={settutorialCompleted}
                    day={day}
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
        {phase === 'dead' ? dead_screen(): null}

        </>
    )
}

export default Game
