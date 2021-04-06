import React, { useState, useContext } from 'react';
import { AddedGamesContext, CheckAddedGamesContext } from './contexts/ShoppingCartContext';


export default function AddedItem(){
    const [ count, setCount ] = useState(1);

    const [addedGames, setAddedGames] = useContext(AddedGamesContext);
    const [checkAddedGames, setCheckAddedGames] = useContext(CheckAddedGamesContext);


    
    return(
        <div>
            {
                count > 0 && (
                <div>
                    <img src="" alt=""/>
                    <h4>Game Title</h4>
                    <p>Price</p>
                    <div className="game-amount">
                        <button onClick={() => setCount(prevCount => prevCount = prevCount > 0 ? prevCount - 1: 0)}>-</button>
                        <input type="number" value={count} onChange={e => setCount(e.target.value)}/>
                        <button onClick={() => setCount(prevCount => prevCount = prevCount + 1)}>+</button>
                    </div>
                </div>
                )
            }
        </div>
    )
}
