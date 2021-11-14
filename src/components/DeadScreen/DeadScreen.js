import {useEffect} from 'react'

const DeadScreen = (props) => {

    const style1 = {
        height: window.innerHeight,
        width: window.innerWidth
    }

    useEffect(() => {
        props.setdataSaved(false)
    }, [])

    return (
        <div className='end-screen' style={style1}>
            
            <div className='end-title-div'>
                <div className='zombies-icon'></div>
                <h1 className='title'>COMPOSE.IO</h1>
                <div className='player-icon'></div>
            </div>
            
            <div className='thank-div'>
                <h1 className='thank-title'>GAME OVER!</h1>
                <p className='thank-text'> Thank you for participating!</p>
            </div>
      </div>
    )
}

export default DeadScreen
