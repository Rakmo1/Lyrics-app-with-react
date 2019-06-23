import React from 'react'
import {Link} from 'react-router-dom'
import GetCharts from '../tracks/GetCharts.js'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo">SingIt</Link>
            <ul id="nav-mobile" className="right">
                <GetCharts />
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
