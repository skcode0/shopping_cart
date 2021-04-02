import React from 'react';
import './Shop.css';
import Categories from './Categories';
import Games from './Games';

export default function Shop(){
    return(
        <div className="shop-container">
            <Categories />
            <Games />
        </div>
    )
}
