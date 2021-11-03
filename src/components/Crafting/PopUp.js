import React, {useState, useEffect} from 'react'

const PopUp = (props) => {


    const [h, seth] = useState(window.innerHeight) 
    const [w, setw] = useState(window.innerWidth)

    useEffect(() => {
        const handle_resize = (e) => {
            console.log('resized to: ', window.innerWidth, ', ', window.innerHeight)
            setw(window.innerWidth)  
            seth(window.innerHeight)
        }
        window.addEventListener('resize', handle_resize)
    }, [window.innerWidth, window.innerHeight])

    const box_style = {
        width: '600px',
        height: '400px',
        backgroundColor: 'black',
        justifyContent: 'center',
        color: 'white',
        borderStyle: 'solid',
        borderColor: 'white',
        backgroundSize: 'cover',
        wordWrap: 'breakWord',
        flexWrap: 'wrap',
        position: 'absolute',
        top: 200,
        left: w/2 - 300,
        alignItems: 'center',
        display: 'flex',
    }

    if (props.display_message) {
        return (
            <div style={box_style}>
                <h1 style={{width: '100%', textAlign: 'center'}}>WARNING</h1>
                <p style={{width: '100%', fontSize: '1.3rem', textAlign: 'center'}}>Are you sure you want to start the game? <br/> You will not be able to craft any items until the end of the level. </p>
                <button className='next' style={{width: '35%'}} onClick={()=>{
                    props.set_display_message(false);
                    props.nextPhase();
                    props.resetLevel();
                }}>YES</button>
                <button className='next' style={{width: '35%'}} onClick={()=>{
                    props.set_display_message(false);
                }}>NO </button>
            </div>
        )       
    }
    else {
        return (null)
    }
}

export default PopUp
