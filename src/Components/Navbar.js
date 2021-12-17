import React from "react"
import "../Styles/Navbar.css"

const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <a href="#top"><img id="logo"src="https://i.imgur.com/9htL7pn.png" alt="JDevLogo" /></a>
                <ul className="nav-items">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar