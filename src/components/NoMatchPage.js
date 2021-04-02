import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './NoMatchPage.css';


export default function NoMatchPage({ location }){
    return(
        <div className="error-container">
            <p>404 - Not Found</p>
            <p>No Match found for ' {location.pathname} '</p>
            <Link className="home-btn" to="/">Return Home</Link>
        </div>
    )
}
