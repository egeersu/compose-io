const Warning = (props) => {

    const box_style = {
        width: '600px',
        height: '150px',
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
        left: window.innerWidth/2 - 300,
        alignItems: 'center',
        display: 'flex',
    }

    if (props.playerHealth < 40) {
        return (
            <div style={box_style}>
                <h1 style={{width: '100%', textAlign: 'center'}}>DANGER</h1>
                <p style={{width: '100%', fontSize: '1.5rem', textAlign: 'center'}}>You are about to die! Eat some food!</p>
            </div> 
        )
    }

    if (props.playerHunger < 5) {
        return (
            <div style={box_style}>
                <h1 style={{width: '100%', textAlign: 'center'}}>STARVING</h1>
                <p style={{width: '100%', fontSize: '1.5rem', textAlign: 'center'}}>You are starving! Eat some food!</p>
            </div> 
        )
    }

    if (props.healthBarHovered) {
        return (
            <div style={box_style}>
                <h1 style={{width: '100%', textAlign: 'center'}}>HEALTH BAR</h1>
                <p style={{width: '100%', fontSize: '1.5rem', textAlign: 'center'}}>Eat some food to restore health points.</p>
            </div> 
        )
    }
    if (props.hungerBarHovered) {
        return (
            <div style={box_style}>
                <h1 style={{width: '100%', textAlign: 'center'}}>HUNGER BAR</h1>
                <p style={{width: '100%', fontSize: '1.5rem', textAlign: 'center'}}>Eat some food to restore hunger points.</p>
            </div> 
        )
    }
    else {
        return null
    }
        
}

export default Warning
