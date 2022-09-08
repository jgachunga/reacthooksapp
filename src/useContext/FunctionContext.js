import React, { useContext } from "react";
import { ThemeContext } from "./useContext";

export default function ChildComponent() {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
      <>
        <div>The theme is {theme}</div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light' )}>
          Change To {theme === 'light' ? 'Dark' : 'Light' } Theme
        </button>
      </>
    )
  }