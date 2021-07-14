import React, {useState} from 'react'

import './screen.css';

const MainScreen = (props) => {

    const style1 = {
        height: window.innerHeight,
        width: window.innerWidth
    }

    return (
        <div className='main-screen' style={style1}>
            
            <div className='title-div'>
                <div className='zombies-icon'></div>
                <h1 className='title'>COMPOSE.IO</h1>
                <div className='player-icon'></div>
            </div>
            
            
            <div className='consent-div'>
                <h1 className='consent-title'>CONSENT FORM</h1>
                <p className='consent-text'> By clicking the START button you are </p>
                <p className='consent-text'> 1) Consenting to your gameplay data being recorded and used in data analysis.  </p>
                <p className='consent-text'> 2) Being notified that your personal information such as name/geolocation will NOT be recorded. </p>
                <p className='consent-text'> 3) Declaring that you are 18 years old or older. </p>
                <p className='consent-text'>  The experiment should take no longer than 15 minutes. </p>
                <p className='consent-text'> Title of Study: Studying Compositional Generalization in Virtual Environments </p>
                <div className='contact-div' 
                    onClick={()=> window.open("https://egeersu.github.io/", "_blank")}>
                    <p className='contact-text'> Principal Investigator</p>
                    <p className='contact-text'>EGE ERSÜ</p> 
                    <p className='contact-text'> The University of Edinburgh, School of Informatics </p>
                    <p className='contact-text'> contact: s2124950@ed.ac.uk</p>
                </div>
            </div>

            <div className='button-div'>
                <button className='start-button' 
                onClick={props.nextPhase} 
                onMouseEnter={(e)=>{
                    document.getElementsByClassName('title')[0].style.color="red"
                }}
                onMouseLeave={(e)=>{document.getElementsByClassName('title')[0].style.color="white"}}
                >START</button>
            </div>
            

        </div>
    )
}

export default MainScreen
