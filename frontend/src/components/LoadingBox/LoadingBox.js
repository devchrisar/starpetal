import React from 'react'
import './LoadingBox.scss'
import gift from '../../assets/plantMoving.gif'

export default function LoadingBox() {
    
    return (
        <div>
            <img src={gift} alt="Loading"></img>
            <h1>
                CARGANDO....
            </h1>
        </div>
    )
}
