import React, { useState, createContext } from 'react';

export const ShoppingCartContext = createContext();
export const OpenCartContext = createContext();
export const AddedGamesContext = createContext();
export const CheckAddedGamesContext = createContext();

export function ShoppingCartProvider({children}){
    // show the amount of items in the cart in the nav
    const [cartAmount, setCartAmount] = useState(0);
    // check if shopping cart div is opened or closed
    const [isOpen, setIsOpen] = useState(false);
    // list of games shown on shopping cart div
    const [addedGames, setAddedGames] = useState([]);
    // if game already in cart, just increase the game count
    const [checkAddedGames, setCheckAddedGames] = useState([]);

    return (
        <ShoppingCartContext.Provider value={[cartAmount, setCartAmount]}>
            <OpenCartContext.Provider value={[isOpen, setIsOpen]}>
                <AddedGamesContext.Provider value={[addedGames, setAddedGames]}>
                    <CheckAddedGamesContext.Provider value={[checkAddedGames, setCheckAddedGames]}>
                        {children}
                    </CheckAddedGamesContext.Provider>
                </AddedGamesContext.Provider>
            </OpenCartContext.Provider>
        </ShoppingCartContext.Provider>
    )
}

