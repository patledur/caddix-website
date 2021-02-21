import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <div className="logo">CADDIX</div>
            <div className="navbar">
                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/training">Training</Link></li>
                    <li><Link to="/Testimonies">Testimonies</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
