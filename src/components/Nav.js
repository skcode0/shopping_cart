import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import shoppingCart from '../img/shopping-cart.svg';

export default function Nav(){
    return (
        <nav>
            <Link to="/" className="logo">VARIETY GAMES</Link>
            <ul>
                <li><Link to='/' className="link nav-link">Home</Link></li>
                <li><Link to='/shop' className="link nav-link">Shop Games</Link></li>
            </ul>
            {/* //! when clicked, slide out cart div from right; change what's in the cart */}
            <div className="shopping-cart-container">
                <img className="shopping-cart" src={shoppingCart} alt="shopping cart"/>
                <span className="shopping-cart-amount">(0)</span>
            </div>
        </nav>
    )
}


