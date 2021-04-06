import React, { useContext, useState, useRef } from 'react';
import { gamesInfo } from './gamesInfo';
import './GameDetails.css';
import { ShoppingCartContext, AddedGamesContext, CheckAddedGamesContext } from './contexts/ShoppingCartContext';

export default function GameDetails({match}){
    let gameName = match.params.name;
    let filteredGameObj = gamesInfo.filter(game => game.name === gameName)[0];
    const [i, setI] = useState(0);
    let leftBtn = useRef();
    let rightBtn = useRef();

    const [cartAmount, setCartAmount] = useContext(ShoppingCartContext);
    const [addedGames, setAddedGames] = useContext(AddedGamesContext);
    const [checkAddedGames, setCheckAddedGames] = useContext(CheckAddedGamesContext);

    function addToCart(e){
        if(e.target.textContent === "Add to Cart"){
            setCartAmount(prevState => prevState + 1);
            setAddedGames(prevArr => prevArr.concat(filteredGameObj));
            setCheckAddedGames(prevArr => prevArr.concat(filteredGameObj.name));
        }
    }

    // image carousel buttons
    function slideImage(e){
        if(e.target.className === rightBtn.current.className){
            if(i >= filteredGameObj.snapshots.length - 1){
                setI(0);
            }
            else{
                setI(prevI => prevI = prevI + 1);
            }
        }
        else if(e.target.className === leftBtn.current.className){
            if(i <= 0){
                setI(filteredGameObj.snapshots.length - 1);
            }
            else{
                setI(prevI => prevI = prevI - 1);
            }
        }
    }

    return (
        <div className="game-details-container">
            <h1>{filteredGameObj.name}</h1>
            <div className="screen-buy-container">
                <div className="main-screenshot">
                    <button className="go-left" ref={leftBtn} onClick={e => slideImage(e)}>&#10094;</button>
                    <img className="screenshots" src={filteredGameObj.snapshots[i]} alt={filteredGameObj.snapshots[i]}/>
                    <button className="go-right" ref={rightBtn} onClick={e => slideImage(e)}>&#10095;</button>
                </div>
                
                <div className="buy-game">
                    <img src={filteredGameObj.coverImg} alt={filteredGameObj.coverImg}/>

                    <div className="extra-info-container">
                        <div className="extra-info">
                            <p className="extra-info-title">Decription</p>
                            <p className="desc">{filteredGameObj.overview}</p>
                        </div>
                        <div className="extra-info">
                            <p className="extra-info-title">Release Date</p>
                            <p className="desc">{filteredGameObj.releaseDate}</p>
                        </div>
                        <div className="extra-info">
                            <p className="extra-info-title">Developer</p>
                            <p className="desc">{filteredGameObj.developer}</p>
                        </div>
                    </div>

                    <div className="price-cart-div">
                        <p className="game-price">{filteredGameObj.price}</p>
                        <button onClick={e => addToCart(e)}>{ filteredGameObj.price === "TBC" ? "Not Available Yet" : "Add to Cart"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
