import { ActionButton } from "./ActionButton"

export const Newsletter = () => {
    const handleSubscribe = () => {
        alert("Thank you for subscribing to our newsletter!");
    }
    return (
        <div>
            <h2>Subscribe to our newsletter</h2>
            <ActionButton text="Subscribe" OnClick={handleSubscribe} />
        </div>
    )
}