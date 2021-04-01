import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

export default function Nav(){
    return (
        <nav>
            <Link to="/" className="logo">VARIETY GAMES</Link>
            <ul>
                <li><Link to='/' className="link nav-link">Home</Link></li>
                <li><Link to='/shop' className="link nav-link">Shop Games</Link></li>
            </ul>
        </nav>
    )
}


