import {useEffect, useState} from 'react'

const Blacklist = (props) => {

    const style1 = {
        height: window.innerHeight,
        width: window.innerWidth
    }

    const [password, setpassword] = useState()

    const change_password = (e) => {
        setpassword(e.target.value)
        if (e.target.value === 'compose egeersu' || e.target.value === 'compose chrislucas' || e.target.value === 'compose simonvalentin') {
            props.setblacklist(false)
        }
    }

    return (
        <div className='end-screen' style={style1}>
            
            <div className='end-title-div'>
                <div className='zombies-icon'></div>
                <h1 className='title'>COMPOSE.IO</h1>
                <div className='player-icon'></div>
            </div>
            
            <div className='thank-div'>
                <h1 className='thank-title'>Thank you for participating!</h1>
                <p className='thank-text'>Unfortunately we cannot allow replays to preserve data quality. </p>
                <p className='thank-text'>Enter password to break the rule: </p>
                <input name="password" value={password} style={{fontSize:'1.5em', textAlign:'center'}} onChange={e=>change_password(e)}></input>
            </div>
      </div>
    )
}


export default Blacklist
