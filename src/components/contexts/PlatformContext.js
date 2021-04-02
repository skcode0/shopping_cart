import React, { useState, createContext } from 'react';

export const PlatformContext = createContext();

export function PlatformProvider({children}){
    const [platform, setPlatform] = useState("All Platforms");

    return (
        <PlatformContext.Provider value={[platform, setPlatform]}>
            {children}
        </PlatformContext.Provider>
    )
}