import { useState } from "react";

export function useLocalStorage(initialValue) {
    const [ value, setValue] = useState(initialValue)

    return [ value, setValue]
}