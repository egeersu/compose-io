// import images here
import weapon1_png from "./assets/weapons/weapon1.png"
import weapon2_png from "./assets/weapons/weapon2.png"
import weapon3_png from "./assets/weapons/weapon3.png"
import weapon4_png from "./assets/weapons/weapon4.png"

import food1_png from "./assets/foods/food1.png"
import food2_png from "./assets/foods/food2.png"
import food3_png from "./assets/foods/food3.png"
import food4_png from "./assets/foods/food4.png"


const weapon1 = {damage: 10, range: 200, image: weapon1_png}
const weapon2 = {damage: 25, range: 300, image: weapon2_png}
const weapon3 = {damage: 40, range: 400, image: weapon3_png}
const weapon4 = {damage: 100, range: 700, image: weapon4_png}
const weapons = {weapon1: weapon1, weapon2: weapon2, weapon3: weapon3, weapon4: weapon4}

const food1 = {health: 10, hunger: 10, image: food1_png}
const food2 = {health: 30, hunger: 30, image: food2_png}
const food3 = {health: 50, hunger: 50, image: food3_png}
const food4 = {health: 100, hunger: 100, image: food4_png}
const foods = {food1: food1, food2: food2, food3: food3, food4: food4}

const inventory_start = {food1:12, food2:0, food3:0, food4:0, weapon1:0, weapon2:0, weapon3:0, weapon4:0}

const day1 = {
    duration: 35,
    map_height: 4000,
    map_width: 4000,
    input_size: 3,
    output_size: 3,
    num_zombies: 15,
    num_items: 35,
    playerSpeed: 5.2,
    zombieSpeedIdle: 0.6,
    zombieSpeedAttack: 1.7,
    zombieHealth: 20,
    zombieAggro: 250,
    loot_table: {
        food1: 1.0,
        food2: 0,
        food3: 0,
        food4: 0,
        weapon1: 0,
        weapon2: 0,
        weapon3: 0,
        weapon4: 0     
    }
}

const day2 = {
    duration: 35,
    map_height: 4000,
    map_width: 4000,
    input_size: 3,
    output_size: 3,
    num_zombies: 25,
    num_items: 55,
    playerSpeed: 5.2,
    zombieSpeedIdle: 0.9,
    zombieSpeedAttack:1.7,
    zombieHealth: 30,
    zombieAggro: 250,
    loot_table: {
        food1: 0,
        food2: 0,
        food3: 0,
        food4: 0,
        weapon1: 1,
        weapon2: 0,
        weapon3: 0,
        weapon4: 0     
    }
}

const day3 = {
    duration: 90,
    map_height: 4000,
    map_width: 4000,
    input_size: 3,
    output_size: 3,
    num_weapon: 5,
    num_zombies: 80,
    num_items: 0,
    playerSpeed: 5.2,
    zombieSpeedIdle: 3.5,
    zombieSpeedAttack: 4.3,
    zombieHealth: 150,
    zombieAggro: 1200,
    loot_table: {
        food1: 1.0,
        food2: 0,
        food3: 0,
        food4: 0,
        weapon1: 0,
        weapon2: 0,
        weapon3: 0,
        weapon4: 0     
    }
}

const experiments = [day1, day2, day3]

const images = {
    food1: food1_png,
    food2: food2_png,
    food3: food3_png,
    food4: food4_png,
    weapon1: weapon1_png,
    weapon2: weapon2_png,
    weapon3: weapon3_png,
    weapon4: weapon4_png,
}


// Crafting System
const input_size = 3
const output_size = 3
const primitives_enabled = false

// TODO: RULES
const flexible_to_strict = [
    [['food1', 'food1'], ['food2']],
    [['food1', 'food1', 'food1'], ['food3']],
    [['food1', 'food2'], ['food3']],
    [['food2', 'food1'], ['food3']],
    [['food2', 'food2'], ['food4']],
    [['food1', 'food3'], ['food4']],
    [['food3', 'food1'], ['food4']],
    [['food1', 'food2', 'food1'], ['food4']],
    [['food2', 'food1', 'food1'], ['food4']],
    [['food1', 'food1', 'food2'], ['food4']],    
    [['weapon1', 'weapon1'], ['weapon2']],
    [['weapon1', 'weapon1', 'weapon1'], ['weapon3']],
    [['weapon2', 'weapon2'], ['weapon4']],
]

const strict_to_flexible = [
    [['food1', 'food1'], ['food2']],
    [['food1', 'food1', 'food1'], ['food3']],
    [['food2', 'food2'], ['food4']],
    [['weapon1', 'weapon1'], ['weapon2']],
    [['weapon1', 'weapon2'], ['weapon3']],
    [['weapon2', 'weapon1'], ['weapon3']],
    [['weapon2', 'weapon2'], ['weapon4']],
    [['weapon1', 'weapon3'], ['weapon4']],
    [['weapon3', 'weapon1'], ['weapon4']],
    [['weapon1', 'weapon1', 'weapon1'], ['weapon3']],
    [['weapon1', 'weapon2', 'weapon1'], ['weapon4']],
    [['weapon2', 'weapon1', 'weapon1'], ['weapon4']],
    [['weapon1', 'weapon1', 'weapon2'], ['weapon4']]
]

const strict_to_strict = [
    [['food1', 'food1'], ['food2']],
    [['food1', 'food1', 'food1'], ['food3']],
    [['food2', 'food2'], ['food4']],
    [['weapon1', 'weapon1'], ['weapon2']],
    [['weapon1', 'weapon1', 'weapon1'], ['weapon3']],
    [['weapon2', 'weapon2'], ['weapon4']],
]

const flexible_to_flexible = [
    [['food1', 'food1'], ['food2']],
    [['food1', 'food1', 'food1'], ['food3']],
    [['food1', 'food2'], ['food3']],
    [['food2', 'food1'], ['food3']],
    [['food2', 'food2'], ['food4']],
    [['food1', 'food3'], ['food4']],
    [['food3', 'food1'], ['food4']],
    [['food1', 'food2', 'food1'], ['food4']],
    [['food2', 'food1', 'food1'], ['food4']],
    [['food1', 'food1', 'food2'], ['food4']],  
    [['weapon1', 'weapon1'], ['weapon2']],
    [['weapon1', 'weapon2'], ['weapon3']],
    [['weapon2', 'weapon1'], ['weapon3']],
    [['weapon2', 'weapon2'], ['weapon4']],
    [['weapon1', 'weapon3'], ['weapon4']],
    [['weapon3', 'weapon1'], ['weapon4']],
    [['weapon1', 'weapon1', 'weapon1'], ['weapon3']],
    [['weapon1', 'weapon2', 'weapon1'], ['weapon4']],
    [['weapon2', 'weapon1', 'weapon1'], ['weapon4']],
    [['weapon1', 'weapon1', 'weapon2'], ['weapon4']]
]

const rules = {
    1: flexible_to_flexible,
    2: strict_to_strict,
    3: flexible_to_strict,
    4: strict_to_flexible
}

export {weapons, foods, input_size, output_size, images, rules, experiments, inventory_start}