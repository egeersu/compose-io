import {useState} from 'react'
import {WeightedSampler} from './WeightedSampler'
import {map_height, map_width, num_food, num_weapon, weapons, foods, num_items, experiments} from '../../config'

export const useItem = (inventory, setInventory, eat, get_zombies_in_range, playerX, playerY, zombies, setzombies, day) => {

    const item_max_x = map_width - 50
    const item_max_y = map_height - 50
    const item_min_x = 600
    const item_min_y = 600

    const looting_distance = 100;
    const [somethingReachable, setsomethingReachable] = useState(false)
    const [reachableItem, setreachableItem] = useState()
    

    const num_items = experiments[day-1].num_items
    const loot_table = experiments[day-1].loot_table     

    const initItems = () => {
        console.log('init items!', day)
        var items = ['food1', 'food2', 'food3', 'food4', 'weapon1', 'weapon2', 'weapon3', 'weapon4']
        var weights = [loot_table['food1'], loot_table['food2'], loot_table['food3'], loot_table['food4'], loot_table['weapon1'], loot_table['weapon2'], loot_table['weapon3'], loot_table['weapon4']]
        const sampler = new WeightedSampler(items, weights);
        const food_arr = []
        const weapon_arr = []

        // Bunker Items
        const bunker_items = Array.apply(null, Array(6)).map(() => sampler.get())//returns array => [0]
        for (var i = 0; i<bunker_items.length; i++){
            if (bunker_items[i][0] === 'f') {
                food_arr.push({itemType: 'food', itemName:bunker_items[i], id: 100+i, x:30+100*i, y:30, reachable: false})
            }   
            else {
                weapon_arr.push({itemType: 'weapon', itemName:bunker_items[i], id: 100+i, x:30+100*i, y:30, reachable: false})
            }         
        }

        const random_items = Array.apply(null, Array(num_items)).map(() => sampler.get())//returns array => [0]
        for (var i = 0; i<random_items.length; i++) {
            const random_item = random_items[i]
            const random_x = Math.floor(Math.random() * (item_max_x - item_min_x) + item_min_x)
            const random_y = Math.floor(Math.random() * (item_max_y - item_min_y) + item_min_y)
            if (['food1', 'food2', 'food3', 'food4'].includes(random_item)){
                const new_food = {itemType: 'food', itemName:random_item, id: i, x: random_x, y:random_y, reachable: false}
                food_arr.push(new_food)
            }
            if (['weapon1', 'weapon2', 'weapon3', 'weapon4'].includes(random_item)){
                const new_weapon = {itemType: 'weapon', itemName: random_item, id: i, x: random_x, y:random_y, reachable: false}
                weapon_arr.push(new_weapon)
            }
        }

        return [food_arr, weapon_arr]
    }

    const resetItems = () => {
        console.log('reset items!')
        var [food_arr, weapon_arr] = initItems()
        set_food_list(food_arr)
        set_weapon_list(weapon_arr)

    }

    const [item_list, set_item_list] = useState(() => initItems())
    const [food_list, set_food_list] = useState(() => item_list[0])
    const [weapon_list, set_weapon_list] = useState(() => item_list[1])

    const add_weapon = (weapon) => {
        set_weapon_list(prev => [...prev, weapon])
    }

    const add_food = (food) => {
        set_food_list(prev => [...prev, food])
    }

    const loot_food = (e)=> {
        if (e.code === 'KeyF') {
            const reachable_food_list = food_list.filter((food)=>food.reachable)
            if(reachable_food_list.length > 0){
                const reachable_food = reachable_food_list[0]
                setInventory({...inventory, [reachable_food.itemName]: inventory[reachable_food.itemName] + 1})
                set_food_list(food_list.filter((food)=>food !== reachable_food))
            }
        }
    }

    const loot_weapon = (e)=> {
        if (e.code === 'KeyF') {
            const reachable_weapon_list = weapon_list.filter((weapon)=>weapon.reachable)
            if(reachable_weapon_list.length > 0){
                const reachable_weapon = reachable_weapon_list[0]
                setInventory({...inventory, [reachable_weapon.itemName]: inventory[reachable_weapon.itemName] + 1})
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
                    //drop item 
                    var items = ['food1', 'food2', 'food3', 'food4', 'weapon1', 'weapon2', 'weapon3', 'weapon4']
                    var weights = [loot_table['food1'], loot_table['food2'], loot_table['food3'], loot_table['food4'], loot_table['weapon1'], loot_table['weapon2'], loot_table['weapon3'], loot_table['weapon4']]
                    const sampler = new WeightedSampler(items, weights);
                    const random_item = Array.apply(null, Array(1)).map(() => sampler.get())[0] //returns array => [0]
                    if (Object.keys(weapons).includes(random_item)) {
                        var random_id = Math.floor(Math.random() * (1e15 - 5 + 1)) + 5;
                        const new_weapon = {itemType: 'weapon', itemName: random_item, id: random_id, x: zombies_copy[the_id].x, y:zombies_copy[the_id].y, reachable: false}
                        add_weapon(new_weapon)
                    }
                    if (Object.keys(foods).includes(random_item)) {
                        var random_id = Math.floor(Math.random() * (1e15 - 5 + 1)) + 5;
                        const new_food = {itemType: 'food', itemName:random_item, id: random_id, x: zombies_copy[the_id].x, y:zombies_copy[the_id].y, reachable: false}
                        add_food(new_food)
                    }
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

    return [food_list, weapon_list, check_reachable, somethingReachable, reachableItem, loot_food, loot_weapon, consumeFood, consumeWeapon, resetItems]
}