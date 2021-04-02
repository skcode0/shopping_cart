import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import shoppingCartImg from '../img/shopping-cart.svg';
import { ShoppingCartContext, OpenCartContext } from './contexts/ShoppingCartContext';

export default function Nav(){
    const [cartAmount] = useContext(ShoppingCartContext);
    const [isOpen, setIsOpen] = useContext(OpenCartContext);

    // open 'ShoppingCart.js'
    function openShoppingCart(){
        setIsOpen(true);
    }

    return (
        <nav>
            <Link to="/" className="logo">VARIETY GAMES</Link>
            <ul>
                <li><Link to='/' className="link nav-link">Home</Link></li>
                <li><Link to='/shop' className="link nav-link">Shop Games</Link></li>
            </ul>
            {/* //! when clicked, slide out cart div from right; change what's in the cart */}
            <div className="shopping-cart-img-container" onClick={openShoppingCart}>
                <img className="shopping-cart" src={shoppingCartImg} alt="shopping cart"/>
                <span className="shopping-cart-amount">({cartAmount})</span>
            </div>
        </nav>
    )
}


