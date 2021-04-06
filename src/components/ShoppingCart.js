import React, { useContext, useEffect, useState } from 'react';
import AddedItem from './AddedItem';
import { ShoppingCartContext, OpenCartContext, AddedGamesContext, CheckAddedGamesContext } from './contexts/ShoppingCartContext';
import './ShoppingCart.css';

export default function ShoppingCart(){
    const [cartAmount, setCartAmount] = useContext(ShoppingCartContext);
    const [isOpen, setIsOpen] = useContext(OpenCartContext);
    const [addedGames, setAddedGames] = useContext(AddedGamesContext);
    const [checkAddedGames, setCheckAddedGames] = useContext(CheckAddedGamesContext);

    const [subtotal, setSubtotal] = useState(0);
    const [subtotalObj, setSubtotalObj] = useState({});

    useEffect(() =>{
        setSubtotal(Object.values(subtotalObj).reduce((a,b) => a + b, 0));
    }, [subtotalObj])

    // close shopping cart div
    function closeShoppingCart(){
        setIsOpen(false);
    }

    // !
    function checkOut(){
        // clear cart
        setCartAmount(0);
        setAddedGames([]);
        setCheckAddedGames([]);
        setSubtotal(0);
        setSubtotalObj([]);
    }

    return(
        <div className="shopping-cart-container" style={{display: isOpen ? "block" : "none"}}>
            <p className="close" onClick={closeShoppingCart}>✖</p>
            <div className="added-items-container">
                <h3 className="my-shopping-cart">My Shopping Cart</h3>
                {
                    addedGames.map(game => <AddedItem key={game.name} {...game} subtotalObj={subtotalObj} setSubtotalObj={setSubtotalObj}/>)
                }
                {/* //! figure out subtotal addition */}
                <h2>SubTotal: ${subtotal.toFixed(2)}</h2>
                {/* //! add onclick for checkout btn; link to "after purchase page" */}
                {
                    checkAddedGames.length === 0 && <p>Cart is Empty</p>
                }
                {
                    checkAddedGames.length > 0 && <button className="checkout-btn" onClick={checkOut}>CHECKOUT</button>
                }
            </div>
            
        </div>
    )
}
