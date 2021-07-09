import React, { useState } from 'react';
import '../App.scss';
import { BsGridFill } from "react-icons/bs";
const Navbar = () => {
    const [showLink,SetShowLink] = useState(false);
    return (
        <div className="Navbar">
        <div className="Nav_leftSide">
        <div className="routers" id={showLink ? "navHidden" : ""}>
        <a href="/home">Inicio</a>
        <a href="/productos">Productos</a>
        </div>
        <button onClick={() => SetShowLink (!showLink)}><BsGridFill size="2em"/></button>
        </div>
        <div className="Nav_rightSide">
        <input type="text" placeholder="Buscar producto" />
        <button>Buscar</button>    
        </div>
        </div>
    )
}

export default Navbar
