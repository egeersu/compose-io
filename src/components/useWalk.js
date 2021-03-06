import {useState} from 'react'
import {experiments} from '../config'

import useSound from 'use-sound'
import walk_sound from '../assets/sound/step.wav'


export const useWalk = (mapX, setmapX, mapY, setmapY, day) => {
    
    const [heldDirections, setheldDirections] = useState([])
    const playerSpeed = experiments[day-1].playerSpeed
    const map_height = experiments[day-1].map_height
    const map_width = experiments[day-1].map_width

    const [distanceCovered, setdistanceCovered] = useState(0)


    const [velocity, setvelocity] = useState([0,0])

    const [playerX, setplayerX] = useState(0)
    const [playerY, setplayerY] = useState(0)

    const [direction, setdirection] = useState('right')
    const [frame, setframe] = useState(['idle', 0])
    const [lastAdd, setlastAdd] = useState(()=>Date.now())

    const frameLag = 1
    const [lagCounter, setlagCounter] = useState(0)

    const walking_keys = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'] 

    // const [play, { stop }] = useSound(
    //     walk_sound,
    //     { volume: 0.8 }

    //   );
    const addDirection = (e) => {
        const index = heldDirections.indexOf(e.code)
        if (index === -1 && walking_keys.includes(e.code)) {
            setheldDirections([e.code, ...heldDirections])
        }
        setlastAdd(Date.now())
    }

    const removeDirection = (e) =>{
        const index = heldDirections.indexOf(e.code)
        var array_copy = [...heldDirections]
        if (index > -1) {
            array_copy.splice(index, 1)
        }
        setheldDirections(array_copy)
    }

    const move = () => {

        if (Date.now() - lastAdd > 3000){
            setheldDirections([])
        }

        const top_key = heldDirections[0]
        //console.log(heldDirections)
       
        if (!heldDirections.length){setvelocity([0,0]); setframe((prev)=>['idle', prev[1]+1])}
        if (top_key === 'KeyW' || top_key === 'ArrowUp'){setvelocity([0,-playerSpeed]); setframe((prev)=>['run', prev[1]+1])}
        if (top_key === 'KeyS' || top_key === 'ArrowDown'){setvelocity([0,playerSpeed]); setframe((prev)=>['run', prev[1]+1])}
        if (top_key === 'KeyA' || top_key === 'ArrowLeft'){setvelocity([-playerSpeed, 0]); setdirection('left'); setframe((prev)=>['run', prev[1]+1])}
        if (top_key === 'KeyD' || top_key === 'ArrowRight'){setvelocity([playerSpeed, 0]); setdirection('right'); setframe((prev)=>['run', prev[1]+1])}

        var new_x = playerX + velocity[0]
        var new_y = playerY + velocity[1]        
        const max_x = map_width - 110 // map width (-border)
        const max_y = map_height - 150// map height (-border)

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

        setdistanceCovered(distanceCovered + Math.max(Math.abs(velocity[0]), Math.abs(velocity[1])))

    }

    const resetMovement = () => {
        setplayerX(0)
        setplayerY(0)
        setvelocity([0,0])
        setheldDirections([])
        setdistanceCovered(0)
    }
    
    
    return [addDirection, removeDirection, move, playerX, playerY, direction, frame, resetMovement, distanceCovered]
}