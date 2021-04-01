import React, { useEffect } from 'react';
import { Link } from "react-router-dom";


export default function NoMatchPage({ location }){
    return(
        <>
            <div>404 - Not Found</div>
            <p>No Match found for ' {location.pathname} '</p>
            <Link to="/">Return Home</Link>
        </>
    )
}
