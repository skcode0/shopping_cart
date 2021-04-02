import React, { useContext, useEffect } from 'react';
import AddedItem from './AddedItem';
import { OpenCartContext } from './contexts/ShoppingCartContext';
import './ShoppingCart.css';


export default function ShoppingCart(){
    const [isOpen, setIsOpen] = useContext(OpenCartContext);

    // close shopping cart div
    function closeShoppingCart(){
        setIsOpen(false);
    }

    return(
        <div className="shopping-cart-container" style={{display: isOpen ? "block" : "none"}}>
            <p className="close" onClick={closeShoppingCart}>✖</p>
            <div className="added-items-container">
                <h3 className="my-shopping-cart">My Shopping Cart</h3>
                {/* //! if item in shopping page clicked, add it to here */}
                <button className="checkout-btn">CHECKOUT</button>
            </div>
            
        </div>
    )
}
