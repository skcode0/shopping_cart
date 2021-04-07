import React from 'react';
import './Home.css';
import animatedHalo from '../img/Halo_Infinite/halo_infinite_vid.mkv';
import haloInfLogo from '../img/Halo_Infinite/Halo_Infinite_-_Logo_for_light.png';
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <main>
            <div className="video-container">
                <video autoPlay loop muted src={animatedHalo} />
            </div>

            <div className="halo-info">
                <img className="halo-logo" src={haloInfLogo} alt="Halo Infinity"/>
                <button><Link className="link" to="/shopping_cart/shop/Halo%20Infinite">Learn More</Link></button>
            </div>
        </main>
    )
}
