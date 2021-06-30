import {useState} from 'react'
import {map_height, map_width} from '../config'

export const useWalk = (mapX, setmapX, mapY, setmapY) => {
    
    const [heldDirections, setheldDirections] = useState([])
    const [playerSpeed, setplayerSpeed] = useState(12)
    const [velocity, setvelocity] = useState([0,0])

    const [playerX, setplayerX] = useState(0)
    const [playerY, setplayerY] = useState(0)


    const walking_keys = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'] 

    const addDirection = (e) => {
        const index = heldDirections.indexOf(e.code)
        if (index === -1 && walking_keys.includes(e.code)) {
            setheldDirections([e.code, ...heldDirections])
        }
        //console.log(heldDirections)
    }

    const removeDirection = (e) =>{
        const index = heldDirections.indexOf(e.code)
        var array_copy = [...heldDirections]
        if (index > -1) {
            array_copy.splice(index, 1)
        }
        setheldDirections(array_copy)
        if (heldDirections.length > 2) {
            setheldDirections([])
        }
    }

    const move = (zombies, setzombies) => {

        const top_key = heldDirections[0]
       
        if (!heldDirections.length){setvelocity([0,0]);}
        if (top_key === 'KeyW' || top_key === 'ArrowUp'){setvelocity([0,-playerSpeed])}
        if (top_key === 'KeyS' || top_key === 'ArrowDown'){setvelocity([0,playerSpeed])}
        if (top_key === 'KeyA' || top_key === 'ArrowLeft'){setvelocity([-playerSpeed, 0])}
        if (top_key === 'KeyD' || top_key === 'ArrowRight'){setvelocity([playerSpeed, 0])}


        var new_x = playerX + velocity[0]
        var new_y = playerY + velocity[1]        
        const max_x = map_width - 80 // map width (-border)
        const max_y = map_height - 80// map height (-border)

        var new_map_x = mapX - velocity[0]
        var new_map_y = mapY - velocity[1]

        if (new_x > max_x) {new_x = max_x; new_map_x = mapX}
        if (new_x < 0) {new_x = 0; new_map_x = mapX}
        if (new_y > max_y) {new_y = max_y; new_map_y = mapY}
        if (new_y < 0) {new_y = 0; new_map_y=mapY}

        setplayerX(new_x)
        setplayerY(new_y)
        setmapX(new_map_x)
        setmapY(new_map_y)
        
        /*
        var zombies_copy = {...zombies}
        Object.entries(zombies).map(([zombie_key, zombie]) => {
            console.log(zombie.dx)
            zombies_copy[zombie_key] = {...zombies_copy[zombie_key], ['x']: zombie.x + zombie.dx, ['y']: zombie.y + zombie.dy}
        })
        setzombies(zombies_copy)
        */
    }
    
    
    return [addDirection, removeDirection, move, playerX, playerY, setplayerX, setplayerY]
}