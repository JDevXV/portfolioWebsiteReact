import React from "react"
import "../Styles/Navbar.css"

const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <img id="logo"src="https://i.imgur.com/g341xae.png" alt="JDevLogo" />
                <ul className="nav-items">
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar