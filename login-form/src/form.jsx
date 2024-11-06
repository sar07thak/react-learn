export const Form = () => {
    return(
        <>
        <div className="container">
            <h2>
                Login - Page
            </h2>
            <div className="input-container">
                <p className ="Name">Name : <input type="text" placeholder="enter your name"/></p>
                <p className ="Password">Password : <input type="password" placeholder="enter your password"/></p>
                <button className="submit">Submit-here</button>
                <p className="para">Forgot Password ? <a href="#">Click here</a></p>
            </div>
        </div>
        </>
    )
}