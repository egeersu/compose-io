import {memo, useState} from 'react'
import {experiments} from '../../config'


export const useZombie = (day) => {

    const num_zombies = experiments[day-1].num_zombies
    const map_height = experiments[day-1].map_height
    const map_width = experiments[day-1].map_width
    const chase_speed = experiments[day-1].zombieSpeedAttack
    const idle_speed = experiments[day-1].zombieSpeedIdle
    const aggroRange = experiments[day-1].zombieAggro
    const zombieHealth = experiments[day-1].zombieHealth

    const zombie_max_x = map_width - 150
    const zombie_max_y = map_height - 150

    // const chase_speed = 2.1
    // const idle_speed = 0.6
    // const aggroRange = 250
    const frame_lag = 3

    const initZombieList = (maxX, maxY, numZombie) => {
        /*
        Initialize Food list.
        */
        var memory_init = {}
        var zombie_dict = {}
        var i = 1
        for (i; i<numZombie+1; i++){
            const random_x = Math.floor(Math.random()*maxX)+1
            const random_y = Math.floor(Math.random()*maxY)+1           

            const new_zombie = {
                id: i, 
                x: random_x, 
                y:random_y, 
                health: zombieHealth, 
                maxHealth: zombieHealth,
                alive: true,
                aggro: false,
                distance: 1e6,
                idleState: 0,
                runState: 0,
                frameCounter: 0,
                reachedTarget: true,
                idleTarget: [0,0],
                direction: 'left',
                dx: 0,
                dy: 0
            }
            zombie_dict[i] = new_zombie
        }
        return zombie_dict
    }

    const [zombies, setzombies] = useState(()=>initZombieList(zombie_max_x,zombie_max_y,num_zombies)) 
    
    const getZombiesInRange = (range) => { 
        var zombies_in_range = []
        Object.entries(zombies).map(([zombie_key, zombie]) => {
            if (zombie.distance < range - 80 && zombie.alive) {
                zombies_in_range.push(zombie)
            }
        })
        return zombies_in_range
    }

    const updateZombieDistance = (playerX, playerY, takeDamage, setframe) => {
        var zombies_copy = {...zombies}
       // Move the zombies
       Object.entries(zombies).map(([zombie_key, zombie]) => {
        if (!zombie.alive) {
            return
        }
        
        if (zombie.aggro) {
            const diff_x = playerX - zombie.x 
            const diff_y = playerY - zombie.y
            const vector_length = Math.sqrt((diff_x**2 + diff_y**2))
            const dx = (diff_x/vector_length) * chase_speed
            const dy = diff_y/vector_length * chase_speed

            var new_runState = zombie.runState
            var new_frameCounter = zombie.frameCounter
            var new_direction = zombie.direction

            if (zombie.frameCounter % frame_lag === 0) {
                new_runState += 1
            }
            new_frameCounter += 1

            if (playerX > zombie.x){
                new_direction = 'right'
            }
            else {
                new_direction = 'left'
            }

            zombies_copy[zombie_key] = {...zombies_copy[zombie_key], 
                ['x']: zombie.x + dx, 
                ['y']: zombie.y + dy, 
                ['frameCounter']: new_frameCounter,
                ['runState']: new_runState,
                ['direction']: new_direction
            }
        }
        else {
            if (zombie.reachedTarget) {
                const new_target = [Math.floor(Math.random() * map_width) + 1, zombie.y]
                zombies_copy[zombie_key] = {...zombies_copy[zombie_key], 
                    ['idleTarget']: new_target,
                    ['reachedTarget']: false,
                }
            }
            else {
                const diff_x =  zombie.idleTarget[0] - zombie.x
                const diff_y = zombie.idleTarget[1] - zombie.y

                var new_reachedTarget = false
                if (Math.abs(diff_x) < 10 && Math.abs(diff_y) < 10) {
                    new_reachedTarget = true;
                }

                const vector_length = Math.sqrt((diff_x**2 + diff_y**2))
                const dx = (diff_x/vector_length) * idle_speed
                const dy = (diff_y/vector_length) * idle_speed

                var new_runState = zombie.runState
                var new_frameCounter = zombie.frameCounter
                var new_direction = zombie.direction

                if (zombie.frameCounter % frame_lag === 0) {
                    new_runState += 1
                }
                new_frameCounter += 1

                if (zombie.x < zombie.idleTarget[0]){
                    new_direction = 'right'
                }
                else {
                    new_direction = 'left'
                }

                zombies_copy[zombie_key] = {...zombies_copy[zombie_key], 
                    ['x']: zombie.x + dx, 
                    ['y']: zombie.y + dy, 
                    ['frameCounter']: new_frameCounter,
                    ['runState']: new_runState,
                    ['direction']: new_direction,
                    ['reachedTarget']: new_reachedTarget,
                }
            }
        }})

        // Update Distance
        Object.entries(zombies).map(([zombie_key, zombie]) => {
            const top_i = zombie.y
            const left_i = zombie.x
            const center_i_x = left_i + 30
            const center_i_y = top_i + 60
            const player_x = playerX + 40
            const player_y = playerY + 40

            // update distance to player
            const distance = Math.sqrt((player_x - center_i_x)**2 + (player_y - center_i_y)**2)
            zombies_copy[zombie_key] = {...zombies_copy[zombie_key], ['distance']: distance}

            //update aggro
            if (distance < aggroRange + 40) {
                zombies_copy[zombie_key] = {...zombies_copy[zombie_key], ['aggro']: true} //change back to true
            }     
        })

        setzombies(zombies_copy)
    
        //attack zombies
        Object.entries(zombies).map(([zombie_key, zombie]) => {
            if (zombie.aggro && zombie.distance < 50 && zombie.alive){
                takeDamage(0.5)
            }                    
        })
    }

    const resetZombies = () => {
        setzombies(initZombieList(zombie_max_x,zombie_max_y,num_zombies))
    }

    return [zombies, setzombies, updateZombieDistance, getZombiesInRange, resetZombies]
}