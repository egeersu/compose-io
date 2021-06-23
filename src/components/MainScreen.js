import React, {useState} from 'react'
import char1 from '../assets/chars/char1.jpeg'
import char2 from '../assets/chars/char2.jpeg'
import char3 from '../assets/chars/char3.jpeg'
import char4 from '../assets/chars/char4.jpeg'
import char5 from '../assets/chars/char5.jpeg'
import char6 from '../assets/chars/char6.jpeg'
import char7 from '../assets/chars/char7.jpeg'


const MainScreen = () => {

    const images = {1:char1, 2:char2, 3:char3, 4:char4, 5:char5, 6:char6, 7:char7}
    const [char, setchar] = useState(1)

    const photo_style = {
        backgroundImage: `url(${images[char]})`,
        width: '200px',
        height: '400px',
        backgroundSize: 'cover',
        borderColor: 'rgb(219, 240, 31)',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: 'black',
    }

    return (
        <div>
            <div style={photo_style}></div>
            <button onClick={e=>setchar(Math.max(char - 1, 1))}>PREVIOUS</button>
            <button onClick={e=>setchar(Math.min(char + 1, 7))}>NEXT</button>
            <h1>{char}</h1>
        </div>
    )
}

export default MainScreen
