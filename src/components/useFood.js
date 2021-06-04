import {useState, useEffect} from 'react'

export const useFood = (inventory, setinventory) => {

    const looting_distance = 60;

    useEffect(() => {
    }, [])

    const initFoodList = (maxX, maxY, numFood) => {
        var food_arr = []
        var i = 1
        for (i; i<numFood+1; i++){
            const random_x = Math.floor(Math.random()*maxX)+1
            const random_y = Math.floor(Math.random()*maxY)+1
            const new_food = {iteamType:'food', id: i, x: random_x, y:random_y, reachable: false}
            food_arr.push(new_food)
        }
        return food_arr
    }
    const [food_list, set_food_list] = useState(()=>initFoodList(950,950,10))

    const loot_food = (e)=> {
        if (e.code === 'KeyF') {
            const reachable_food_list = food_list.filter((food)=>food.reachable)
            if(reachable_food_list.length > 0){
                const reachable_food = reachable_food_list[0]
                setinventory([reachable_food.id, ...inventory])
                set_food_list(food_list.filter((food)=>food !== reachable_food))
            }
        }
    }

    const check_reachable = (playerX, playerY) => {
        for (var i = 0; i<food_list.length; i++){
            const distance = Math.sqrt((food_list[i].x - playerX)**2 + (food_list[i].y - playerY)**2)
            if (distance > looting_distance) {
                food_list[i].reachable = false
            }
            else{
                food_list[i].reachable = true
            }
        }
        // update reachable field according to distance
    }

    return [food_list, check_reachable, loot_food]
}