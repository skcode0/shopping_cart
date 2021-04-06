import React, { useContext, useEffect } from 'react';
import AddedItem from './AddedItem';
import { OpenCartContext, AddedGamesContext, CheckAddedGamesContext } from './contexts/ShoppingCartContext';
import './ShoppingCart.css';

export default function ShoppingCart(){
    const [isOpen, setIsOpen] = useContext(OpenCartContext);
    const [addedGames, setAddedGames] = useContext(AddedGamesContext);
    const [checkAddedGames, setCheckAddedGames] = useContext(CheckAddedGamesContext);

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
                {
                    
                    addedGames.map(game => <AddedItem key={game.name} />)
                }
                <button className="checkout-btn">CHECKOUT</button>
            </div>
            
        </div>
    )
}
