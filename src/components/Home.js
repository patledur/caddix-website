import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Caddix solutions is a collective of piping designers with AVEVA P.D.M.S experience all around the world based in Europe.</h2>
            <small>English and French speaking</small>
            <h4>Freelancers, available 24/24H</h4>
            <Link to='/contact'>
                <button>Contact Us</button>
            </Link>
            
        </div>
    )
}

export default Home
