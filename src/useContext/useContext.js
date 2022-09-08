import React, { useState }  from "react";
import ChildComponent from "./FunctionContext";



export const ThemeContext = React.createContext();

export default function AppThemeContext() {
    const [theme, setTheme] = useState('dark')

    return (
        <>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <ChildComponent/>
            </ThemeContext.Provider>
        </>
    )
}