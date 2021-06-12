import {useState} from 'react'
import {map_height, map_width, num_food, num_weapon} from '../config'

export const useItem = (inventory, setInventory, playerHunger, setplayerHunger, get_zombies_in_range, playerX, playerY) => {

    const food_max_x = map_width - 50
    const food_max_y = map_height - 50

    const weapon_max_x = 950
    const weapon_max_y = 950

    const looting_distance = 60;
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
            if (clicked_food === 'food1') {
                setplayerHunger(hunger => hunger + 10)
            }
            if (clicked_food === 'food2') {
                setplayerHunger(hunger => hunger + 20)
            }
            if (clicked_food === 'food3') {
                setplayerHunger(hunger => hunger + 40)
            }
            if (clicked_food === 'food4') {
                setplayerHunger(hunger => hunger + 100)
            }
            setInventory({...inventory, [clicked_food]: inventory[clicked_food]-1})
        }
        else {
            console.log('NOT ENOUGH!')
        }
    }

    const consumeWeapon = (e) => {

        const clicked_weapon = e.target.id
        if (inventory[clicked_weapon] > 0){
            const zombies_in_range = get_zombies_in_range(playerX, playerY, 200)
            if (clicked_weapon === 'weapon1') {
                console.log(zombies_in_range)
                for (var i = 0; i<zombies_in_range.length; i++) {
                    zombies_in_range[i].health = Math.max(0, zombies_in_range[i].health - 50)
                }
            }
            if (clicked_weapon === 'weapon2') {
            }
            if (clicked_weapon === 'weapon3') {
            }
            if (clicked_weapon === 'weapon4') {
            }
            setInventory({...inventory, [clicked_weapon]: inventory[clicked_weapon]-1})
        }
        else {
            console.log('NOT ENOUGH!')
        }

    }

    return [food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon]
}