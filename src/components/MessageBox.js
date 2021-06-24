import React, {useState, useEffect} from 'react'
import wasd_image from '../assets/wasd.jpeg'


const MessageBox = () => {
    
    const [message, setMessage] = useState('walking')
    
    const [h, seth] = useState(window.innerHeight) 
    const [w, setw] = useState(window.innerWidth)

    useEffect(() => {
        const handle_resize = (e) => {
            console.log('resized to: ', window.innerWidth, ', ', window.innerHeight)
            setw(window.innerWidth)  
            seth(window.innerHeight)
            //TODO: Fix Bar Size
        }
        window.addEventListener('resize', handle_resize)
    }, [window.innerWidth, window.innerHeight])

    const box_style = {
        position: 'absolute',
        top: (h/2 - 380) + 'px',
        left: (w/2 - 300) + 'px', 
        width: '600px',
        height: '600px',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        borderStyle: 'solid',
        borderColor: 'white',
        //backgroundImage: `url(${wasd_image})`,
        backgroundSize: 'cover'
    }

    function tutorial_walk() {
        return (
        <div style={box_style}>
            <h1>WALKING</h1>
            <p>This is how you walk!</p>
            <button onClick={()=>setMessage('looting')}>NEXT</button>
        </div>
        )
    }

    function tutorial_loot() {
        return (
        <div style={box_style}>
            <h1>LOOTING</h1>
            <p>This is how you loot!</p>
            <button onClick={()=>setMessage('done')}>NEXT</button>
        </div>
        )
    }


    return (
        <>
            {message === 'walking' ? tutorial_walk() : null}
            {message === 'looting' ? tutorial_loot() : null}
        </>
    )   
}

export default MessageBox
