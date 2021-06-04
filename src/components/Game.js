import {useState, useEffect} from 'react'
import Map from './Map'
import ControlScreen from './ControlScreen'

import {useFood} from './useFood'
import {useKeyPress} from './useKeyPress'
import {useKeyUp} from './useKeyUp'
import {useWalk} from './useWalk'

const Game = () => {

    const [cameraWidth, setcameraWidth] = useState('50px')
    const [cameraHeight, setcameraHeight] = useState('50px')

    // game 
    const [days, setDays] = useState()

    // player
    const [playerHealth, setplayerHealth] = useState(100)
    const [playerHunger, setplayerHunger] = useState(100)
    const [playerX, setplayerX] = useState(500)
    const [playerY, setplayerY] = useState(500)
    const [mapX, setmapX] = useState(250) //camera/2
    const [mapY, setmapY] = useState(-150) //camera/2
    const [inventory, setinventory] = useState([]) //dictionary for counts?

    // movement
    const [addDirection, removeDirection, move] = useWalk(playerX, playerY, setplayerX, setplayerY, mapX, setmapX, mapY, setmapY)
   
    // food
    const [food_list, check_reachable, loot_food] = useFood(inventory, setinventory)

    useKeyPress((e) => {
        addDirection(e)
        loot_food(e)
    })

    useKeyUp((e)=> {
        removeDirection(e)
    })
    
    useEffect(() => {    
        const gameTimerId = setInterval(() => {
            move(check_reachable)
          },18)
          return () => {clearInterval(gameTimerId)}    
      }
      )
      
    return (
        <div className='game'>
            <div className='header'>
                <h1 className='header-title'>COMPOSE.IO</h1>
            </div>
            <div className='camera' style={{width:{cameraWidth}, height:{cameraHeight}}}>
                <Map 
                food_list={food_list} 
                playerX={playerX} 
                playerY={playerY}
                mapX = {mapX}
                mapY = {mapY}/>
            </div>
            <ControlScreen playerHealth={playerHealth} inventory={inventory}/>
        </div>
    )
}

export default Game
