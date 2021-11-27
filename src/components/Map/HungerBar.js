import React from 'react'

import hungerLogo from '../../assets/hunger.png'

const HealthBar = (props) => {

    const healthDiv_style = {
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        top: '110px',
        width: '100%',
        textAlign: 'center',
        width: '100%',
        height: '2%',
    }

    const healthBar_style = {
        position: 'relative',
        display: 'inline-block',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: '50%',
        backgroundColor: 'gray',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '6px',
        borderColor: props.hungerBarHovered ? 'white' : 'black'
    }

    const healthFluid_style = {
        position: 'absolute',
        width: props.playerHunger + '%',
        height: '100%',
        backgroundColor: 'cyan',
    }

    const healthText_style = {
        position: 'absolute',
        fontSize: '35px',
        fontWeight: '600',
        color: 'black',
        width: '100%',
        alignItems: 'center',
        color: 'black'
    }

    const healthLogo_style = {
        display: 'relative',
        width: '40px',
        height: '50%',
        backgroundColor: 'black',
        backgroundImage:  `url(${hungerLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '6px',
        marginRight: '0.3rem'
    }
    
    return (
        <div style={healthDiv_style} onMouseOver={(e)=>props.sethungerBarHovered(true)} onMouseLeave={(e)=>props.sethungerBarHovered(false)}>
            <div style={healthLogo_style}></div>
            <div style={healthBar_style}>
                <div style={healthFluid_style}></div>
                <div style={healthText_style}>{Math.floor(props.playerHunger)}</div>
            </div>
        </div>
    )
}

export default HealthBar