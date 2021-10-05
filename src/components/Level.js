
import {useState} from 'react'
import {experiments} from '../config'


import {useItem} from './Map/useItem'
import {useZombie} from './Enemies/useZombie'
import {useWalk} from './useWalk'
import {usePlayer} from './usePlayer'

import useSound from 'use-sound'
import env_sound from '../assets/sound/env.wav'


export const Level = (day, group, experimentID, die) => {

    // init shit based on props.day and config experiments 
    /*
    * reset mapX, mapY
    * reset playerHealth, playerHunger
    * new hunger 
    * reset playerX, playerY
    * repopulate food_list, weapon_list
    * new zombies
    */

    const resetLevel = () => {
        resetItems()
        setmapX(window.innerWidth/2 - 80)
        setmapY(window.innerHeight/2 - 100)
        resetPlayer()
        resetMovement()
        resetZombies()
    }

    const [play] = useSound(env_sound);

    // Initialize Player
    const [mapX, setmapX] = useState(window.innerWidth/2 - 80) //camera/2
    const [mapY, setmapY] = useState(window.innerHeight/2 - 100) //camera/2

    // Initialize Inventory
    const [inventory, setInventory] = useState({food1:12, food2:0, food3:0, food4:0, weapon1:12, weapon2:0, weapon3:0, weapon4:0})

    const [playerAlive, playerHealth, playerHunger, takeDamage, starve, eat, resetPlayer] = usePlayer(die)

    // Movement
    const [addDirection, removeDirection, move, playerX, playerY, direction, frame, resetMovement] = useWalk(mapX, setmapX, mapY, setmapY, day)

    // Zombies
    const [zombies, setzombies, updateZombieDistance, get_zombies_in_range, resetZombies] = useZombie(day)

    // Items
    const [food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon, resetItems] = useItem(inventory, setInventory, eat, get_zombies_in_range, playerX, playerY, zombies, setzombies, day)

    return [mapX, setmapX, 
        mapY, setmapY, 
        playerAlive, playerHealth, playerHunger, takeDamage, starve, eat, 
        inventory, setInventory, 
        addDirection, removeDirection, move, playerX, playerY, direction, frame, 
        zombies, setzombies, updateZombieDistance, get_zombies_in_range,
        food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon,
        resetLevel]
}
