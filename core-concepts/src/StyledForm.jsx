export const StyledForm = () => {
    return (
        <form className="contact-form">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Name" className="form-input" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" placeholder="Message" className="form-input" tabIndex="1" />
        </form>
    )
}