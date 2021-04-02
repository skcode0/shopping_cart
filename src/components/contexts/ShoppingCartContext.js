import React, { useState, createContext } from 'react';

export const ShoppingCartContext = createContext();
export const OpenCartContext = createContext();

export function ShoppingCartProvider({children}){
    const [cartAmount, setCartAmount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ShoppingCartContext.Provider value={[cartAmount, setCartAmount]}>
            <OpenCartContext.Provider value={[isOpen, setIsOpen]}>
                {children}
            </OpenCartContext.Provider>
        </ShoppingCartContext.Provider>
    )
}

