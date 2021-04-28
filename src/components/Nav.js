import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import shoppingCartImg from '../img/shopping-cart.svg';
import { ShoppingCartContext, OpenCartContext } from './contexts/ShoppingCartContext';
import { PlatformContext } from './contexts/PlatformContext';

export default function Nav(){
    const [cartAmount] = useContext(ShoppingCartContext);
    const [isOpen, setIsOpen] = useContext(OpenCartContext);
    const [platform, setPlatform] = useContext(PlatformContext);


    // open 'ShoppingCart.js'
    function openShoppingCart(){
        setIsOpen(true);
    }

    // reset games filter
    function resetGamesFilter(){
        setPlatform("All Platforms");
    }

    return (
        <nav>
            <Link to="/shopping_cart/" className="logo">VARIETY GAMES</Link>
            <ul>
                <li><Link to='/shopping_cart/' className="link nav-link home">Home</Link></li>
                <li><Link to='/shopping_cart/shop' className="link nav-link" onClick={resetGamesFilter}>Shop Games</Link></li>
            </ul>
            <div className="shopping-cart-img-container" onClick={openShoppingCart}>
                <img className="shopping-cart" src={shoppingCartImg} alt="shopping cart"/>
                <span className="shopping-cart-amount">({cartAmount})</span>
            </div>
        </nav>
    )
}


