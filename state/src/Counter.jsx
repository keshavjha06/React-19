import { useState } from "react"

export const Counter = () => {
    // useState returns an array with two values
    // currentValue , setterFunction = useState(initialValue)
    // currentValue , setterFunction = useState(fn)

    const [count, setCount] = useState(() => {
        console.log("initial state function called");
        return 0
    })
    console.log("counter component rendered with count:", count);

    const handleClick = () => {
        setCount(count + 1)
    }
    return <button onClick={handleClick}>Count: {count}</button>
}