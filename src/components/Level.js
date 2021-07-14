
import {useState} from 'react'
import {experiments} from '../config'


import {useItem} from './Map/useItem'
import {useZombie} from './Enemies/useZombie'
import {useKeyPress} from './useKeyPress'
import {useKeyUp} from './useKeyUp'
import {useWalk} from './useWalk'
import {usePlayer} from './usePlayer'


export const Level = (props) => {

    // init shit based on props.day and config experiments 

    // Initialize Player
    const [mapX, setmapX] = useState(window.innerWidth/2 - 80) //camera/2
    const [mapY, setmapY] = useState(window.innerHeight/2 - 100) //camera/2

    const [playerAlive, playerHealth, playerHunger, takeDamage, starve, eat] = usePlayer()

    // Initialize Inventory
    const [inventory, setInventory] = useState({food1:10, food2:10, food3:10, food4:10, weapon1:15, weapon2:10, weapon3:10, weapon4:10})

    // Movement
    const [addDirection, removeDirection, move, playerX, playerY, direction, frame] = useWalk(mapX, setmapX, mapY, setmapY)

    // Zombies
    const [zombies, setzombies, updateZombieDistance, get_zombies_in_range] = useZombie()

    // Items
    const [food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon] = useItem(inventory, setInventory, eat, get_zombies_in_range, playerX, playerY, zombies, setzombies)

    return [mapX, setmapX, 
        mapY, setmapY, 
        playerAlive, playerHealth, playerHunger, takeDamage, starve, eat, 
        inventory, setInventory, 
        addDirection, removeDirection, move, playerX, playerY, direction, frame, 
        zombies, setzombies, updateZombieDistance, get_zombies_in_range,
        food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon]

}
