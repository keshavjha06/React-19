export const CustomButton = ({ text }) => {
    const name = "John Doe"
    const handleClick = () => {
        console.log(`Hey ${name} , you clicked ${text}`);
    }

    return <button onClick={handleClick}>{text}</button>
}

