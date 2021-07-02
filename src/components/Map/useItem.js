import {useState} from 'react'
import {map_height, map_width, num_food, num_weapon, weapons, foods} from '../../config'

export const useItem = (inventory, setInventory, eat, get_zombies_in_range, playerX, playerY, zombies, setzombies) => {

    const food_max_x = map_width - 50
    const food_max_y = map_height - 50

    const weapon_max_x = map_width - 50
    const weapon_max_y = map_height - 50

    const looting_distance = 100;
    const [somethingReachable, setsomethingReachable] = useState(false)
    const [reachableItem, setreachableItem] = useState()

    const initFoodList = (maxX, maxY, numFood) => {
        /*
        Initialize Food list.
        */
        var food_arr = []
        var i = 1
        for (i; i<numFood+1; i++){
            const random_x = Math.floor(Math.random()*maxX)+1
            const random_y = Math.floor(Math.random()*maxY)+1
            const new_food = {itemType:"food1", id: i, x: random_x, y:random_y, reachable: false}
            food_arr.push(new_food)
        }
        return food_arr
    }

    const initWeaponList = (maxX, maxY, numWeapon) => {
        /*
        Initialize Food list.
        */
        var weapon_arr = []
        var i = 1
        for (i; i<numWeapon+1; i++){
            const random_x = Math.floor(Math.random()*maxX)+1
            const random_y = Math.floor(Math.random()*maxY)+1
            const new_weapon = {itemType:"weapon1", id: i, x: random_x, y:random_y, reachable: false}
            weapon_arr.push(new_weapon)
        }
        return weapon_arr
    }


    const [food_list, set_food_list] = useState(()=>initFoodList(food_max_x,food_max_y,num_food)) 
    const [weapon_list, set_weapon_list] = useState(()=>initWeaponList(weapon_max_x, weapon_max_y, num_weapon))

    const loot_food = (e)=> {
        if (e.code === 'KeyF') {
            const reachable_food_list = food_list.filter((food)=>food.reachable)
            if(reachable_food_list.length > 0){
                const reachable_food = reachable_food_list[0]
                setInventory({...inventory, [reachable_food.itemType]: inventory[reachable_food.itemType] + 1})
                set_food_list(food_list.filter((food)=>food !== reachable_food))
            }
        }
    }

    const loot_weapon = (e)=> {
        if (e.code === 'KeyF') {
            const reachable_weapon_list = weapon_list.filter((weapon)=>weapon.reachable)
            if(reachable_weapon_list.length > 0){
                const reachable_weapon = reachable_weapon_list[0]
                setInventory({...inventory, [reachable_weapon.itemType]: inventory[reachable_weapon.itemType] + 1})
                set_weapon_list(weapon_list.filter((weapon)=>weapon !== reachable_weapon))
            }
        }
    }
  

    const check_reachable = (playerX, playerY) => {
        var something_reachable = false
        var reachable_item = null
        for (var i = 0; i<food_list.length; i++){
            const distance = Math.sqrt((food_list[i].x - playerX)**2 + (food_list[i].y - playerY)**2)
            if (distance > looting_distance) {
                food_list[i].reachable = false
            }
            else{
                food_list[i].reachable = true
                something_reachable = true
                reachable_item = food_list[i]
            }
        }
        for (var i = 0; i<weapon_list.length; i++){
            const distance = Math.sqrt((weapon_list[i].x - playerX)**2 + (weapon_list[i].y - playerY)**2)
            if (distance > looting_distance) {
                weapon_list[i].reachable = false
            }
            else{
                weapon_list[i].reachable = true
                something_reachable = true
                reachable_item = weapon_list[i]
            }
        }
        setsomethingReachable(something_reachable)
        setreachableItem(reachable_item)
    }

    const consumeFood = (e) => {
        const clicked_food = e.target.id
        if (inventory[clicked_food] > 0){
            eat(foods[clicked_food].health,foods[clicked_food].hunger)
            setInventory({...inventory, [clicked_food]: inventory[clicked_food]-1})
        }
        else {
            console.log('NOT ENOUGH!')
        }
    }

    const consumeWeapon = (e) => {

        const clicked_weapon = e.target.id
        const weapon_damage = weapons[clicked_weapon]['damage']
        const weapon_range = weapons[clicked_weapon]['range']


        if (inventory[clicked_weapon] > 0){
            const zombies_in_range = get_zombies_in_range(weapon_range)
            var zombies_copy = {...zombies}

            for (var i = 0; i<zombies_in_range.length; i++){
                const the_id = zombies_in_range[i].id
                const new_health = Math.max(zombies_copy[the_id].health - weapon_damage, 0)
                if (new_health <= 0) {
                    zombies_copy[the_id] = {...zombies_copy[the_id], ['alive']: false, ['health']: 0}
                }
                else {
                    zombies_copy[the_id] = {...zombies_copy[the_id], ['health']: new_health}
                }
                setzombies(zombies_copy)
            }
            setInventory({...inventory, [clicked_weapon]: inventory[clicked_weapon]-1})
        }
        else {
            console.log('NOT ENOUGH!')
        }

    }

    return [food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon]
}