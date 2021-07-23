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
                <p className='consent-text'> By clicking the START button you agree that:</p>
                <p className='consent-text'> (1) I have read and understood the Participant Information Sheet for this study, that I have had the opportunity to ask questions to the Principal Investigator via email, and that any questions I had were answered to my satisfaction.</p>
                <p className='consent-text'> (2) My participation is voluntary, and that I can withdraw at any time without giving a reason. Withdrawing will not affect any of my rights. </p>
                <p className='consent-text'> (3) I consent to my anonymised data being used in academic publications and presentations.  </p>
                <p className='consent-text'> (4) I am 18 years of age or older. </p>
                <p className='consent-text'> Title of Study: Studying Compositional Generalization in Virtual Environments </p>
                <p className='consent-text'> The experiment should take no longer than 15 minutes. </p>
            </div>

            <div className='contact-div' onClick={()=> window.open("https://egeersu.github.io/", "_blank")}>
                    <p className='contact-text'>Principal Investigator</p>
                    <p className='contact-text'>EGE ERSÜ</p> 
                    <p className='contact-text'>The University of Edinburgh, School of Informatics </p>
                    <p className='contact-text'>contact: s2124950@ed.ac.uk</p>
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
