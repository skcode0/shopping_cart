import React, { useState, useContext, useEffect } from 'react';
import { ShoppingCartContext, AddedGamesContext, CheckAddedGamesContext } from './contexts/ShoppingCartContext';
import './AddedItem.css';

export default function AddedItem(props){
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(props.price);

    const [addedGames, setAddedGames] = useContext(AddedGamesContext);
    const [checkAddedGames, setCheckAddedGames] = useContext(CheckAddedGamesContext);
    const [cartAmount, setCartAmount] = useContext(ShoppingCartContext);


    useEffect(() => {
        setTotal(props.price * count);
        props.setSubtotalObj(prevObj => (
            {
                ...prevObj, 
                [props.name]: total
            }
        ));
    }, [count, total]);

    function decrementAmount(){
        if(count > 1){
            setCount(prevCount => prevCount = prevCount - 1);
        }
        else{
            setCount(0);
            props.setSubtotalObj(prevObj => (
                {
                    ...prevObj, 
                    [props.name]: 0
                }
            ));
            setCheckAddedGames(checkAddedGames.filter(game => game !== props.name));
            setAddedGames(addedGames.filter(game => game.name !== props.name));
            setCartAmount(prevAmount => prevAmount = prevAmount - 1);
        }
    }

    function incrementAmount(){
        if(count === ""){
            setCount(0);
        }
        setCount(prevCount => prevCount = prevCount + 1);
    }
    
    return(
        <>
            {
                (count > 0 || count === "") && (
                    <div className="added-item">
                        <img className="added-item-coverImg" src={props.coverImg} alt={props.coverImg}/>
                        <div className="added-item-info">
                            <h3>{props.name}</h3>
                            <p>${props.price}</p>
                            <div className="game-amount">
                                <button onClick={decrementAmount}>−</button>
                                <input type="number" value={count} onChange={e => (e.target.value === "" || +e.target.value < 1) ? setCount("") : setCount(+e.target.value)}/>
                                <button onClick={incrementAmount}>+</button>
                            </div>
                        </div>
                        
                    </div>
                )
            }
        </>
    )
}
