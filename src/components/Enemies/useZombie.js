import {memo, useState} from 'react'
import {map_height, map_width, num_zombies} from '../../config'

export const useZombie = () => {

    const zombie_max_x = map_width - 150
    const zombie_max_y = map_height - 150

    const aggroRange = 250

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
                aggro: false,
                distance: 1e6}
            zombie_dict[i] = new_zombie
        }
        return zombie_dict
    }

    const [zombies, setzombies] = useState(()=>initZombieList(zombie_max_x,zombie_max_y,num_zombies)) 


    const getZombiesInRange = (range) => { 
        var zombies_in_range = []
        Object.entries(zombies).map(([zombie_key, zombie]) => {
            if (zombie.distance < range - 80) {
                console.log(zombie.distance)
                zombies_in_range.push(zombie)
            }
        })
        return zombies_in_range
    }

    const updateZombieDistance = (playerX, playerY) => {

        var zombies_copy = {...zombies}

       // Move the zombies
       Object.entries(zombies).map(([zombie_key, zombie]) => {
        if (zombie.aggro) {
            const degree = Math.atan((playerY-zombie.y)/(playerX-zombie.x)) * (180/Math.PI)
            dx = Math.cos(degree)
            dy = Math.sin(degree)
            const new_x = zombie.x + dx
            const new_y = zombie.y + dy                
            zombies_copy[zombie_key] = {...zombies_copy[zombie_key], ['x']: new_x, ['y']: new_y}
   
        }
        else {
            var dx = [1,-1,0,0,0][Math.floor(Math.random()*5)];
            var dy = [1,-1,0,0,0][Math.floor(Math.random()*5)];
            const new_x = zombie.x + dx
            const new_y = zombie.y + dy
            zombies_copy[zombie_key] = {...zombies_copy[zombie_key], ['x']: new_x, ['y']: new_y}
        }

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
        })
    }




    const moveZombies = (playerX, playerY) => {
        // if aggro: chase
        // else: move randomly

        var zombies_copy = {...zombies}

        Object.entries(zombies).map(([zombie_key, zombie]) => {
            if (zombie.aggro) {
                const new_x = zombie.x + 1
                const new_y = zombie.y 
                zombies_copy[zombie_key] = {...zombies_copy[zombie_key], ['x']: new_x, ['y']: new_y}
            }
            else {
                const new_x = zombie.x + 1
                const new_y = zombie.y 
                zombies_copy[zombie_key] = {...zombies_copy[zombie_key], ['x']: new_x, ['y']: new_y}
            }
        })
        setzombies(zombies_copy)
    }


    return [zombies, updateZombieDistance, moveZombies, getZombiesInRange]
}