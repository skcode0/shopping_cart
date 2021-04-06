import React from 'react';
import './Game.css';
import { Link } from "react-router-dom";

export default function Game(props){
    return(
        <Link to={`/shop/${props.name}`} className="game-info-link">
            <div className="game-info">
                <img className="cover-img" src={props.coverImg} alt={props.coverImg}/>
                <h2 className="game-name">{props.name}</h2>
                <p>{props.price}</p>
            </div>
        </Link>
    )
}