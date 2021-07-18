import {useState} from 'react'
import {map_height, map_width} from '../config'

export const usePlayer = (die) => {
    
    const [alive, setalive] = useState(true)
    const [health, sethealth] = useState(100)
    const [hunger, sethunger] = useState(100)

    const hungerDamage = 0.05

    const takeDamage = (value) => {
        sethealth(Math.max(health-value, 0))
        if (health === 0){
            setalive(false)
            die()
        }
    }

    const starve = (value) => {
        sethunger(Math.max(hunger-value, 0))
        if (hunger === 0) {
            takeDamage(0.05)
        }

    }
    const eat = (foodHealth, foodHunger) => {
        sethealth(Math.min(health+foodHealth, 100))
        sethunger(Math.min(hunger+foodHunger, 100))
    }

    const resetPlayer = () => {
        sethealth(100)
        sethunger(100)
    }

    return [alive, health, hunger, takeDamage, starve, eat, resetPlayer]
}