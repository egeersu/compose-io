import React, {useState} from 'react'
import char1 from '../../assets/chars/char1.jpeg'
import char2 from '../../assets/chars/char2.jpeg'
import char3 from '../../assets/chars/char3.jpeg'
import char4 from '../../assets/chars/char4.jpeg'
import char5 from '../../assets/chars/char5.jpeg'
import char6 from '../../assets/chars/char6.jpeg'
import char7 from '../../assets/chars/char7.jpeg'

import './screen.css';

const MainScreen = () => {

    const images = {1:char1, 2:char2, 3:char3, 4:char4, 5:char5, 6:char6, 7:char7}
    const [char, setchar] = useState(1)

    const imageStyle = {
        backgroundImage: `url(${images[char]})`,
        backgroundSize: 'cover',
        width: '200px',
        height: '450px',
        borderRadius: '3px',
        borderStyle: 'solid',
        borderColor: 'black',
        margin: '3rem'
    }

    return (
        <div className='char-screen'>
            <div className='char-image' style={imageStyle}></div>
            <div className='player-info' >
                <input type="text" value="Player1"/>
            </div>
            <div className='arrows'>
                <button className='arrow-char' onClick={e=>setchar(Math.max(char - 1, 1))}>PREV</button>
                <button className='arrow-char' onClick={e=>setchar(Math.min(char + 1, 7))}>NEXT</button>
            </div>
        </div>
    )
}

export default MainScreen
