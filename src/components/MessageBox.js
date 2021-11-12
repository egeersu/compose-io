import React, {useState, useEffect} from 'react'
import wasd_image from '../assets/wasd.png'
import fkey from '../assets/Fkey.png'
import enemy from '../assets/zomb/Zombie_walk/Zombie_Walk1.png'
import food from '../assets/foods/food1.png'
import health from '../assets/health.png'
import hunger from '../assets/hunger.png'

const MessageBox = (props) => {

    const [message, setMessage] = useState('walking')

    const [h, seth] = useState(window.innerHeight) 
    const [w, setw] = useState(window.innerWidth)

    useEffect(() => {
        const handle_resize = (e) => {
            setw(window.innerWidth)  
            seth(window.innerHeight)
        }
        window.addEventListener('resize', handle_resize)
    }, [window.innerWidth, window.innerHeight])

    const box_style = {
        width: '600px',
        height: '400px',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        borderStyle: 'solid',
        borderColor: 'white',
        backgroundSize: 'cover',
        wordWrap: 'breakWord',
        flexWrap: 'wrap'
    }

    function tutorial_walk() {
        return (
        <div style={box_style}>
            <h1 style={{width: '100%'}}>WALKING</h1>
            <div style={{width: '100%', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '400px', height: '200px', backgroundImage: `url(${wasd_image})`, backgroundSize: 'cover'}}>
                </div>
            </div>
            <button className='next' style={{width: '50%'}} onClick={()=>setMessage('looting')}>NEXT</button>
        </div>
        )
    }

    function tutorial_loot() {
        return (
            <div style={box_style}>
                <h1 style={{width: '100%'}}>PICK UP ITEMS</h1>
                <div style={{width: '100%', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '100px', height: '100px', backgroundImage: `url(${fkey})`, backgroundSize: 'cover'}}></div>
                    <div style={{width: '100px', height: '100px', backgroundImage: `url(${food})`, backgroundSize: 'cover'}}></div>
                </div>
                <p style={{width: '100%'}}>You can pick up items from the floor by pressing F. <br /> Once picked up, they will appear on the action bar below. </p>
                <button className='next' style={{width: '50%'}} onClick={()=>setMessage('health')}>NEXT</button>
            </div>
            )
    }

    function tutorial_health() {
        return (
            <div style={box_style}>
                <h1 style={{width: '100%'}}>HEALTH & HUNGER</h1>
                <div style={{width: '100%', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{width: '50px', height: '50px', backgroundImage: `url(${health})`, backgroundSize: 'cover'}}></div>
                    <div style={{width: '50px', height: '50px', backgroundImage: `url(${hunger})`, backgroundSize: 'cover'}}></div>
                </div>
                <p style={{width: '100%'}}>The bars on top of the screen show your current Health and Hunger points. <br/> If your Hunger drops to 0, you start losing Health points. If your Health drops to 0, you die. <br/> You can restore Health and Hunger points by clicking on your food items. </p>
                <button className='next' style={{width: '50%'}} onClick={()=>setMessage('enemies')}>NEXT</button>
            </div>
            )
    }

    function tutorial_enemy() {
        return (
            <div style={box_style}>
                <h1 style={{width: '100%'}}>ZOMBIES</h1>
                <div style={{width: '100%', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{width: '100px', height: '150px', backgroundImage: `url(${enemy})`, backgroundSize: 'cover'}}>
                    </div>
                </div>
                <p style={{width: '100%'}}>If you get too close to zombies, they will start chasing you. <br />They will start damaging your health once they catch you. <br />You can damage nearby zombies by clicking on your weapon items. </p>
                <button className='next' style={{width: '50%'}} onClick={()=>setMessage('tutorial-level1')}>NEXT</button>
            </div>
            )
    }

    function tutorial_level1() {
        return (
            <div style={box_style}>
                <h1 style={{width: '100%'}}>TUTORIAL</h1>
                <p style={{width: '100%'}}> The first level serves as a tutorial. <br /> Just focus on picking up resources while avoiding zombies.</p>
                <button className='next' style={{width: '50%'}} onClick={()=>{setMessage('none'); props.setfrozen(false); props.settutorialCompleted(true)}}>DONE</button>
            </div>
            )
    }

    if (!props.tutorialCompleted) {
        return (
            <div style={{position: 'absolute', top: (window.innerHeight/2 - 150).toString() + 'px', left: (0).toString() + 'px', display:'flex', justifyContent:'center', alignItems:'center', textAlign: 'center', width:'100%', opacity:'100%'}}>
                {message === 'walking' ? tutorial_walk() : null}
                {message === 'looting' ? tutorial_loot() : null}
                {message === 'health' ? tutorial_health() : null}
                {message === 'enemies' ? tutorial_enemy() : null}
                {message === 'tutorial-level1' ? tutorial_level1() : null}
            </div>
        )       
    }
    else {
        return (null)
    }
}

export default MessageBox
