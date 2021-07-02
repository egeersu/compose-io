import {memo, useState} from 'react'
import {map_height, map_width, num_zombies} from '../../config'

export const useZombie = () => {

    const zombie_max_x = map_width - 150
    const zombie_max_y = map_height - 150
    const chase_speed = 1.5

    const aggroRange = 250
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
                health: 100, 
                alive: true,
                aggro: true,
                distance: 1e6,
                idleState: 0,
                runState: 0,
                frameCounter: 0,
                direction: 'left',
                dx: 0,
                dy: 0}
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
            var dx = [0,0,0,0,0][Math.floor(Math.random()*5)];
            var dy = [0,0,0,0,0][Math.floor(Math.random()*5)];
            const new_x = zombie.x + dx
            const new_y = zombie.y + dy
            //zombies_copy[zombie_key] = {...zombies_copy[zombie_key], ['x']: new_x, ['y']: new_y}
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
                zombies_copy[zombie_key] = {...zombies_copy[zombie_key], ['aggro']: true}
            } 
                    
        })

        setzombies(zombies_copy)
        
    
        //attack zombies
        Object.entries(zombies).map(([zombie_key, zombie]) => {
            if (zombie.aggro && zombie.distance < 50 && zombie.alive){
                takeDamage(1)
            }                    
        })
    }

    return [zombies, setzombies, updateZombieDistance, getZombiesInRange]
}