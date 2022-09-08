import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function App() {
    const [ name, setName ] = useLocalStorage('')
    useEffect(() => {
        console.log(name);
    }, [name])
    return (
        <input 
            type='text'
            value={name}
            onChange={(e)=> setName(e.target.value)}
        />
    )
}