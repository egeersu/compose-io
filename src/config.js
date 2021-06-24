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
const weapon2 = {damage: 20, range: 300, image: weapon2_png}
const weapon3 = {damage: 30, range: 400, image: weapon3_png}
const weapon4 = {damage: 50, range: 500, image: weapon4_png}
const weapons = {weapon1: weapon1, weapon2: weapon2, weapon3: weapon3, weapon4: weapon4}


const food1 = {health: 10, hunger: 10, image: food1_png}
const food2 = {health: 20, hunger: 20, image: food2_png}
const food3 = {health: 40, hunger: 40, image: food3_png}
const food4 = {health: 100, hunger: 100, image: food4_png}
const foods = {food1: food1, food2: food2, food3: food3, food4: food4}

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


// TODO: Customizable days
// {Day1: {...}, Day2: {...}}

const map_height = 4000
const map_width = 4000
const num_food = 10
const num_weapon = 10
const num_zombies = 30


// Crafting System
const input_size = 6
const output_size = 1

// TODO: RULES
const flexible = [
    [['food1'], ['food1']],
    [['food2'], ['food2']],
    [['food3'], ['food3']],
    [['weapon1'], ['weapon1']],
    [['weapon2'], ['weapon2']],
    [['weapon3'], ['weapon3']],
    [['food1', 'food1', 'food1'], ['food3']],
    [['food1', 'food2'], ['food3']],
    [['food2', 'food1'], ['food3']],
    [['weapon1', 'weapon1', 'weapon1'], ['weapon3']],
    [['weapon2', 'weapon1'], ['weapon3']],
    [['weapon1', 'weapon2'], ['weapon3']]
]


const rules = flexible


export {map_height, map_width, num_food, num_weapon, num_zombies, weapons, foods, input_size, output_size, images, rules}