import React from "react"
import './Header.css'
import memes from "./memes.png"

function Header() {
    return (
        <header className="header">
            <img src={memes} alt="logoCarrito" className="logoCarrito"/>
            <h3 className="header-title">Meme Generator</h3>
        </header>
    )
}

export default Header