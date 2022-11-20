import '../styles/LoginStyle.css'

function Login() {
    return(
        <>
        <div className="container">
        <section className="login d-flex">
            <div className="login-left w-50">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-6">
                        <div className="header">
                            <h1>Login</h1>
                            <p>Enter your Username and Password</p>
                            <div className="warning">
                                
                            </div>
                        </div>

                        <form className="loginForm">
                            <label for="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter your username" required/>

                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" required/>

                            <a href="#" className="text-decoration-none">Forgot your password?</a>

                            <button className="signin" type="submit">Sign in</button>
                            <button className="signin-google">
                                <img src="images/google.png" alt="" width={"16px"} height={"16px"}/> Continue with Google
                            </button>

                            <span className="d-inline">Don’t have any account? <a href="#" className="d-inline text-decoration-none">Sign up </a>here!</span>
                        </form>
                    </div>
                </div>
            </div>
            <div className="login-right w-50">
                <img src="/images/plant-tree.jpg"/>
            </div>  
        </section>
    </div>
        </>
    )
}

export default Login