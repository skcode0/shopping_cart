import React from 'react';
import { Link } from 'react-router-dom';

export default function AfterPurchase(){
    return(
        <div>
            <div>Thank you for the purchase.</div>
            <Link to='/'>Return Home</Link>
        </div>
    )
}