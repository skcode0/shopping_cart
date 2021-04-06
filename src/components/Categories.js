import React, { useContext } from 'react';
import './Categories.css';
import { PlatformContext } from './contexts/PlatformContext';

export default function Catagories(){
    const [platform, setPlatform] = useContext(PlatformContext);

    function saveTextContent(e){
        setPlatform(e.target.textContent);
    }

    return(
        <div className="platform-container">
            <ul>
                <li className="platform-list" onClick={e => saveTextContent(e)}>All Platforms</li>
                <li className="platform-list" onClick={e => saveTextContent(e)}>PC</li>
                <li className="platform-list" onClick={e => saveTextContent(e)}>Xbox</li>
                <li className="platform-list" onClick={e => saveTextContent(e)}>PlayStation</li>
                <li className="platform-list" onClick={e => saveTextContent(e)}>Nintendo</li>
            </ul>
        </div>
    )
}
