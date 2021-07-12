import {useState} from 'react'
import {experiments} from '../config'

export const Scheduler = () => {

    const [phase, setphase] = useState(() => 'main')
    const [day, setday] = useState(() => 1)
    const [startTime, setstartTime] = useState(() => Date.now())
    const [gameTime, setgameTime] = useState(() => 'NaN')
    const [numPhases, setnumPhases] = useState(() => experiments.length)

    const clockTick = () => {
        const game_duration = experiments[day].game_duration
        setgameTime(game_duration - Math.floor((Date.now() - startTime) / 1000))    
        if (gameTime <= 0) {
            nextPhase()
        }
    }

    const nextPhase = () => {
        switch(phase) {
            case 'crafting':
                setphase('game')
                setstartTime(Date.now())              
                break;
            case 'game':
                if (phase === numPhases) {
                    setphase('end')
                    console.log('Experiment Ended!')
                }
                setphase('crafting')
                setday(day + 1)              
                break;
            case 'main':
                setphase('crafting')
                break;
            default:
              return
          }
    }

    return [phase, gameTime, day, clockTick, nextPhase]
}