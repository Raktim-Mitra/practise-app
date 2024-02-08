import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <nav>
        <h1>TechStar</h1>
        <main>
            <Link to={"/"}>Home</Link>
            <a href={"/#about"}>About</a>
            <Link to={"/contact"}>Contact</Link>
            <a href={"/#brands"} >Brands</a>
            <Link to={"/services"} >Services</Link>
        </main>
    </nav>
  )
}

export default Header