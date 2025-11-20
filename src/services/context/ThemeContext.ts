import React, {createContext ,  useState , useEffect, useContext} from "react";




const ThemeContext = createContext('');


export const ThemeProvider = ({children})=>{



    return (
        <ThemeContext.Provider value={ {'name'}}>

        {children}
        </ThemeContext.Provider>
    );

}

export const useTheme =()=> useContext(ThemeContext)