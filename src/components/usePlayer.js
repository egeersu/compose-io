import {useState} from 'react'
import {map_height, map_width} from '../config'

export const usePlayer = () => {
    
    const [alive, setalive] = useState(true)
    const [health, sethealth] = useState(100)
    const [hunger, sethunger] = useState(100)

    const takeDamage = (value) => {
        if (health - value < 0){
            setalive(false)
        }
        sethealth(health - value)
    }

    const starve = (value) => {
        if (hunger-value < 0) {
            setalive(false)
        }
        sethunger(hunger-value)
    }
    const eat = (foodHealth, foodHunger) => {
        sethealth(Math.min(health+foodHealth, 100))
        sethunger(Math.min(hunger+foodHunger, 100))
    }

    return [health, hunger, takeDamage, starve, eat]
}