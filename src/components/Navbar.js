import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <div className="logo">CADDIX</div>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/training">Training</Link>
                <Link to="/Testimonies">Testimonies</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
    )
}

export default Navbar
