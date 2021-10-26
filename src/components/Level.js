
import {useState, useEffect} from 'react'
import {experiments} from '../config'


import {useItem} from './Map/useItem'
import {useZombie} from './Enemies/useZombie'
import {useWalk} from './useWalk'
import {usePlayer} from './usePlayer'

import useSound from 'use-sound'
import env_sound from '../assets/sound/env.wav'


export const Level = (day, group, experimentID, die, dataSaved, setdataSaved, base_ids) => {


    console.log('Group: ', group)

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
    const [addDirection, removeDirection, move, playerX, playerY, direction, frame, resetMovement, distanceCovered] = useWalk(mapX, setmapX, mapY, setmapY, day)

    // Zombies
    const [zombies, setzombies, updateZombieDistance, get_zombies_in_range, resetZombies] = useZombie(day)

    // Items
    const [food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon, resetItems, food_collected, weapon_collected, enemies_killed] = useItem(inventory, setInventory, eat, get_zombies_in_range, playerX, playerY, zombies, setzombies, day, group, experimentID, base_ids)


    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keylhxhzSbFUmspNk'}).base(base_ids[group]); // pick the current group's base.
 
    const SaveLevelAnalytics = () => {
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds()

        console.log(playerAlive)

        base('Day').create({
            "ExperimentID": experimentID,
            "Date": datetime,
            "Group": group,
            "Day": day,
            "Food_Collected": food_collected,
            "Weapon_Collected": weapon_collected,
            "Distance_Covered": distanceCovered,
            "Enemies_Killed": enemies_killed,
            "Completed": playerAlive ? 1 : 0
            }, function(err, record) {
            if (err) {
                console.error(err);
                return;
            }
            console.log(record.getId());
            });
    }

    useEffect(() => {
        if (!dataSaved) {
            setdataSaved(true)
            SaveLevelAnalytics()    
        }
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
