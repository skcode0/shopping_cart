import React from 'react';
import { Link } from 'react-router-dom';
import './AfterPurchase.css';

export default function AfterPurchase(){
    return(
        <div className="afterpurchase">
            <p>Thank you for the purchase.</p>
            <Link to='/shopping_cart/'><button className="return-home">Return Home</button></Link>
        </div>
    )
}