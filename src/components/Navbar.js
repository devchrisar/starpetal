import React from 'react'
import '../App.scss'

const Navbar = () => {
    return (
        <div className="Navbar">
        <div className="Nav_leftSide">
        <div className="routers">
        <a href="/home">Inicio</a>
        <a href="/productos">Productos</a>
        </div>
        </div>
        <div className="Nav_rightSide">
        <input type="text" placeholder="Buscar producto" />
        <button>Search</button>    
        </div>
        </div>
    )
}

export default Navbar
