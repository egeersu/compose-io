import {useState} from 'react'
import {map_height, map_width, num_zombies} from '../../config'

export const useZombie = () => {

    const zombie_max_x = map_width - 150
    const zombie_max_y = map_height - 150

    const looting_distance = 60;

    const [somethingReachable, setsomethingReachable] = useState(false)
    const [reachableItem, setreachableItem] = useState()

    const initZombieList = (maxX, maxY, numZombie) => {
        /*
        Initialize Food list.
        */
        var zombie_arr = []
        var i = 1
        for (i; i<numZombie+1; i++){
            const random_x = Math.floor(Math.random()*maxX)+1
            const random_y = Math.floor(Math.random()*maxY)+1
            const new_zombie = {itemType:"zombie", id: i, x: random_x, y:random_y, health: 100, reachable: false}
            zombie_arr.push(new_zombie)
        }
        return zombie_arr
    }

    const [zombie_list, set_zombie_list] = useState(()=>initZombieList(zombie_max_x,zombie_max_y,num_zombies)) 

    const get_zombies_in_range = (playerX, playerY, range) => {
        var zombies_in_range = []
        for (var i = 0; i<zombie_list.length; i++){
            const distance = Math.sqrt((zombie_list[i].x - playerX)**2 + (zombie_list[i].y - playerY)**2)
            if (distance < range){
                zombies_in_range.push(zombie_list[i])
            }
        }
        return zombies_in_range
    }

    return [zombie_list, get_zombies_in_range]
}