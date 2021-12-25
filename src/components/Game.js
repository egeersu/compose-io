import {useEffect} from 'react'
import CraftingScreen from './Crafting/CraftingScreen'

import Intro from './Intro/Intro'
import EndScreen from './EndScreen/EndScreen'
import DeadScreen from './DeadScreen/DeadScreen'

import Camera from './Camera'
import {useKeyPress} from './useKeyPress'
import {useKeyUp} from './useKeyUp'
import {Scheduler} from './Scheduler'

import {Level} from './Level'

const Game = (props) => {

    const [phase, gameTime, day, clockTick, nextPhase, frozen, setfrozen, tutorialCompleted, settutorialCompleted, die, dataSaved, setdataSaved] = Scheduler()

    const [mapX, setmapX, 
        mapY, setmapY, 
        playerAlive, playerHealth, playerHunger, takeDamage, starve, eat, 
        inventory, setInventory, 
        addDirection, removeDirection, move, playerX, playerY, direction, frame, 
        zombies, setzombies, updateZombieDistance, get_zombies_in_range,
        food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon,
        resetLevel, saveLevelAnalytics] = Level(day, props.group, props.sessionId, props.experimentId, die, dataSaved, setdataSaved, props.wso, props.saveData, props.prolificID)        

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
                    starve(0.07)    
                }
                clockTick()    
            },12)
            
            return () => {
                clearInterval(gameTimerId)
            }                
        }
      })

    function main_screen() {
        return <Intro nextPhase={nextPhase} group={props.group} airtable_base={props.airtable_base} ip={props.ip} prolificID={props.prolificID} setprolificID={props.setprolificID}  />
    }
      
    function crafting_ui(){
        return <CraftingScreen inventory={inventory} sessionId={props.sessionId} experimentId={props.experimentId} group={props.group} day={day} nextPhase={nextPhase} resetLevel={resetLevel} wso={props.wso} saveData={props.saveData} prolificID={props.prolificID}/>
    }

    function end_screen() {
        return <EndScreen group={props.group} sessionId={props.sessionId} experimentId={props.experimentId} airtable_base={props.airtable_base} ip={props.ip}/>
    }

    function dead_screen() {
        return <DeadScreen setdataSaved={setdataSaved} ip={props.ip} />
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
