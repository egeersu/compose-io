import React from 'react'
import './Bunker.css'
import bunker_floor from '../../../assets/bunkerfloor.png'

const Bunker = () => {

    const bunker_ground =  {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '600px',
        height: '600px',
        backgroundColor: 'Black',
        backgroundImage: `url(${bunker_floor})`,
    }


    return (
        <div style={bunker_ground}></div>
    )
}

export default Bunker
