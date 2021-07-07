import WeaponRange from "./WeaponRange"

import {useState} from 'react'

import run1 from '../../assets/cyber/Run/01.png'
import run2 from '../../assets/cyber/Run/02.png'
import run3 from '../../assets/cyber/Run/03.png'
import run4 from '../../assets/cyber/Run/04.png'
import run5 from '../../assets/cyber/Run/05.png'
import run6 from '../../assets/cyber/Run/06.png'
import run7 from '../../assets/cyber/Run/07.png'
import run8 from '../../assets/cyber/Run/08.png'
import run9 from '../../assets/cyber/Run/09.png'
import run10 from '../../assets/cyber/Run/10.png'
import run11 from '../../assets/cyber/Run/11.png'
import run12 from '../../assets/cyber/Run/12.png'
import run13 from '../../assets/cyber/Run/13.png'
import run14 from '../../assets/cyber/Run/14.png'
import run15 from '../../assets/cyber/Run/15.png'
import run16 from '../../assets/cyber/Run/16.png'
import run17 from '../../assets/cyber/Run/17.png'
import run18 from '../../assets/cyber/Run/18.png'
import run19 from '../../assets/cyber/Run/19.png'
import run20 from '../../assets/cyber/Run/20.png'
import run21 from '../../assets/cyber/Run/21.png'

import idle1 from '../../assets/cyber/Idle/01.png'
import idle2 from '../../assets/cyber/Idle/02.png'
import idle3 from '../../assets/cyber/Idle/03.png'
import idle4 from '../../assets/cyber/Idle/04.png'
import idle5 from '../../assets/cyber/Idle/05.png'
import idle6 from '../../assets/cyber/Idle/06.png'

const Player = (props) => {

    const numFrames = 21
    const avatarHeight = '140px'
    const avatarWidth = '140px'

    const avatarBasics = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        top: props.position_y,
        left: props.position_x,
        height: '140px',
        width: '120px',
        transform: props.direction === 'right' ? null : 'rotateY(180deg)',
    }
    
    const avatar0 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 0 ? 'inline-block' : 'none',
        backgroundImage: `url(${run1})`
    }
    const avatar1 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 1 ? 'inline-block' : 'none',
        backgroundImage: `url(${run2})`
    } 
    const avatar2 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 2 ? 'inline-block' : 'none',
        backgroundImage: `url(${run3})`
    } 
    const avatar3 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 3 ? 'inline-block' : 'none',
        backgroundImage: `url(${run4})`
    } 
    const avatar4 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 4 ? 'inline-block' : 'none',
        backgroundImage: `url(${run5})`
    } 
    const avatar5 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 5 ? 'inline-block' : 'none',
        backgroundImage: `url(${run6})`
    } 
    const avatar6 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 6 ? 'inline-block' : 'none',
        backgroundImage: `url(${run7})`
    } 
    const avatar7 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 7 ? 'inline-block' : 'none',
        backgroundImage: `url(${run8})`
    } 
    const avatar8 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 8 ? 'inline-block' : 'none',
        backgroundImage: `url(${run9})`
    } 
    const avatar9 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 9 ? 'inline-block' : 'none',
        backgroundImage: `url(${run10})`
    } 
    const avatar10 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 10 ? 'inline-block' : 'none',
        backgroundImage: `url(${run11})`
    } 
    const avatar11 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 11 ? 'inline-block' : 'none',
        backgroundImage: `url(${run12})`
    } 
    const avatar12 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 12 ? 'inline-block' : 'none',
        backgroundImage: `url(${run13})`
    } 
    const avatar13 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 13 ? 'inline-block' : 'none',
        backgroundImage: `url(${run14})`
    } 
    const avatar14 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 14 ? 'inline-block' : 'none',
        backgroundImage: `url(${run15})`
    } 
    const avatar15 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 15 ? 'inline-block' : 'none',
        backgroundImage: `url(${run16})`
    } 
    const avatar16 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 16 ? 'inline-block' : 'none',
        backgroundImage: `url(${run17})`
    } 
    const avatar17 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 17 ? 'inline-block' : 'none',
        backgroundImage: `url(${run18})`
    } 
    const avatar18 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 18 ? 'inline-block' : 'none',
        backgroundImage: `url(${run19})`
    } 
    const avatar19 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 19 ? 'inline-block' : 'none',
        backgroundImage: `url(${run20})`
    } 
    const avatar20 = {
        ...avatarBasics,
        display: props.frame[0] === 'run' && props.frame[1] % numFrames === 20 ? 'inline-block' : 'none',
        backgroundImage: `url(${run21})`
    } 

    const idleBasics = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        top: props.position_y,
        left: props.position_x,
        height: '140px',
        width: '120px',
        scale: '3%',
        transform: props.direction === 'right' ? null : 'rotateY(180deg)',
    }
    const idleStyle0 = {
        ...idleBasics,
        display: props.frame[0] === 'idle' && props.frame[1] % 1 === 0 ? 'inline-block' : 'none',
        backgroundImage: `url(${run12})`
    } 
    const idleStyle1 = {
        ...idleBasics,
        display: props.frame[0] === 'idle' && props.frame[1] % 6 === 1 ? 'inline-block' : 'none',
        backgroundImage: `url(${run12})`
    } 
    const idleStyle2 = {
        ...idleBasics,
        display: props.frame[0] === 'idle' && props.frame[1] % 6 === 2 ? 'inline-block' : 'none',
        backgroundImage: `url(${run12})`
    } 
    const idleStyle3 = {
        ...idleBasics,
        display: props.frame[0] === 'idle' && props.frame[1] % 6 === 3 ? 'inline-block' : 'none',
        backgroundImage: `url(${run13})`
    } 
    const idleStyle4 = {
        ...idleBasics,
        display: props.frame[0] === 'idle' && props.frame[1] % 6 === 4 ? 'inline-block' : 'none',
        backgroundImage: `url(${run13})`
    } 
    const idleStyle5 = {
        ...idleBasics,
        display: props.frame[0] === 'idle' && props.frame[1] % 6 === 5 ? 'inline-block' : 'none',
        backgroundImage: `url(${run13})`
    } 


    // you can add health bar or stuff here (also for enemies)
    return (
        <div>
            <div className='player-avatar' style={avatar0}></div>
            <div className='player-avatar' style={avatar1}></div>
            <div className='player-avatar' style={avatar2}></div>
            <div className='player-avatar' style={avatar3}></div>
            <div className='player-avatar' style={avatar4}></div>
            <div className='player-avatar' style={avatar5}></div>
            <div className='player-avatar' style={avatar6}></div>
            <div className='player-avatar' style={avatar7}></div>
            <div className='player-avatar' style={avatar8}></div>
            <div className='player-avatar' style={avatar9}></div>
            <div className='player-avatar' style={avatar10}></div>
            <div className='player-avatar' style={avatar11}></div>
            <div className='player-avatar' style={avatar12}></div>
            <div className='player-avatar' style={avatar13}></div>
            <div className='player-avatar' style={avatar14}></div>
            <div className='player-avatar' style={avatar15}></div>
            <div className='player-avatar' style={avatar16}></div>
            <div className='player-avatar' style={avatar17}></div>
            <div className='player-avatar' style={avatar18}></div>
            <div className='player-avatar' style={avatar19}></div>
            <div className='player-avatar' style={avatar20}></div>

            <div className='player-avatar' style={idleStyle0}></div>


            <h1 style={{display: 'relative', top: '100', left: '100'}}>SUP DUDE</h1>
            <WeaponRange x={props.position_x} y={props.position_y} weaponHovered={props.weaponHovered}/>
        </div>
    )
}

export default Player
