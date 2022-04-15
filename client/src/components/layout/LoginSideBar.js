import classes from "./Login.module.css"

function LoginSideBar() {
    return (
        <div className={classes.content}>
            <span>Login</span>
            <div className="row">
                <div className="input-field row s6">
                    <input id="email" type="email" className="validate"/>
                    <label className="active" htmlFor="email">Email</label>
                </div>
                <div className="input-field row s6">
                    <input id="password" type="password" className="validate"/>
                    <label className="active" htmlFor="password">password</label>
                </div>
            </div>
        </div>
    )
}

export default LoginSideBar;