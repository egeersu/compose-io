
import {useState, useEffect} from 'react'
import {experiments, inventory_start} from '../config'


import {useItem} from './Map/useItem'
import {useZombie} from './Enemies/useZombie'
import {useWalk} from './useWalk'
import {usePlayer} from './usePlayer'

import useSound from 'use-sound'
import env_sound from '../assets/sound/env.wav'


export const Level = (day, group, sessionId, experimentId, die, dataSaved, setdataSaved, wso, saveData) => {

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
    const [inventory, setInventory] = useState(inventory_start)

    const [playerAlive, playerHealth, playerHunger, takeDamage, starve, eat, resetPlayer] = usePlayer(die)

    // Movement
    const [addDirection, removeDirection, move, playerX, playerY, direction, frame, resetMovement, distanceCovered] = useWalk(mapX, setmapX, mapY, setmapY, day)

    // Zombies
    const [zombies, setzombies, updateZombieDistance, get_zombies_in_range, resetZombies] = useZombie(day)

    // Items
    const [food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon, resetItems, food_collected, weapon_collected, enemies_killed] = useItem(inventory, setInventory, eat, get_zombies_in_range, playerX, playerY, zombies, setzombies, day, group, experimentId, sessionId, wso, saveData)
 
    const SaveLevelAnalytics = (props) => {
        if (!dataSaved){
            setdataSaved(true)
            var currentdate = new Date(); 
            var datetime = currentdate.getDate() + "-"
                    + (currentdate.getMonth()+1)  + "-" 
                    + currentdate.getFullYear() + " "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":"
                    + currentdate.getSeconds()

            const level_data = {
                    "experimentId": experimentId,
                    "sessionId": sessionId,
                    "table": "level",
                    "group": group,
                    "timestamp": Date.now(),
                    "date": datetime,
                    "day": day,
                    "food_collected": food_collected,
                    "weapon_collected": weapon_collected,
                    "distance_covered": distanceCovered,
                    "enemies_killed": enemies_killed,
                    "level_completed": playerAlive ? 1 : 0
                }

            // send level data here
            if (saveData) {
                wso.sendChunk(level_data)
            }
        }
    }

        useEffect(() => {
            SaveLevelAnalytics()                                    
        }, [dataSaved])

    return [mapX, setmapX, 
        mapY, setmapY, 
        playerAlive, playerHealth, playerHunger, takeDamage, starve, eat, 
        inventory, setInventory, 
        addDirection, removeDirection, move, playerX, playerY, direction, frame, 
        zombies, setzombies, updateZombieDistance, get_zombies_in_range,
        food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon,
        resetLevel, SaveLevelAnalytics]
}
