export const Counter = () => {
    let count = 0
    console.log("counter component rendered");

    const handleClick = () => {
        count = count + 1
        console.log(count);

    }
    return <button onClick={handleClick}>Count: {count}</button>
}