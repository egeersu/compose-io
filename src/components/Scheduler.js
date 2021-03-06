import {useState} from 'react'
import {experiments} from '../config'

export const Scheduler = (props) => {

    const [phase, setphase] = useState(() => 'main')
    const [day, setday] = useState(() => 1)
    const [startTime, setstartTime] = useState(() => Date.now())
    const [gameTime, setgameTime] = useState(0)
    const [numDays, setnumDays] = useState(() => experiments.length)
    const [frozen, setfrozen] = useState(true)
    const [tutorialCompleted, settutorialCompleted] = useState(false) 
    const [dataSaved, setdataSaved] = useState(true)

    const clockTick = () => {
        if (frozen) {
            setstartTime(Date.now())
        }
        else {
            const game_duration = experiments[day-1].duration
            setgameTime(game_duration - Math.floor((Date.now() - startTime) / 1000))    
            if (gameTime <= 0) {
                setdataSaved(false)
                nextPhase()
            }                
        }
    }

    const die = () => {
        //setdataSaved(false)
        setphase('dead')
    }

    const nextPhase = () => {
        switch(phase) {
            case 'crafting':
                setphase('game')
                setstartTime(Date.now())            
                setgameTime(experiments[day-1].duration)
                break;
            case 'game':
                if (day === numDays) {
                    setphase('end')
                    console.log('Experiment Ended!') 
                    break;
                }
                else {
                    setphase('crafting')
                    setday(day + 1)              
                    break;    
                }
            case 'main':
                setphase('crafting')
                break;
            default:
              return
          }
    }

    return [phase, gameTime, day, clockTick, nextPhase, frozen, setfrozen, tutorialCompleted, settutorialCompleted, die, dataSaved, setdataSaved]
}