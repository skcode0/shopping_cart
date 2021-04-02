import React, { useContext } from 'react';
import Game from './Game';
import './Games.css';
import { gamesInfo } from './gamesInfo';
import { PlatformContext } from './contexts/PlatformContext';

export default function Games(){
    const [platform, setPlatform] = useContext(PlatformContext);

    function filterGames(){
        switch(platform){
            case "PC":
                let pcGames = gamesInfo.filter(game => game.platform.includes(platform.toLowerCase()));
                return(
                    pcGames.map(game => <Game key={game.name} {...game}/>)
                )
            case "Xbox":
                let xboxGames = gamesInfo.filter(game => game.platform.includes(platform.toLowerCase()));
                return(
                    xboxGames.map(game => <Game key={game.name} {...game}/>)
                )
            case "PlayStation":
                let psGames = gamesInfo.filter(game => game.platform.includes(platform.toLowerCase()));
                return(
                    psGames.map(game => <Game key={game.name} {...game}/>)
                )
            case "Nintendo":
                let nintendoGames = gamesInfo.filter(game => game.platform.includes(platform.toLowerCase()));
                return(
                    nintendoGames.map(game => <Game key={game.name} {...game}/>)
                )
            case "All Platforms":
            default:
                return(
                    gamesInfo.map(game => <Game key={game.name} {...game}/>)
                )
        }
    }

    return(
        <div className="games-container">
            {
                filterGames()
            }
        </div>
    )
}