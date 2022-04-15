import classes from "./Login.module.css"
import {useState} from "react";
import {useAtom} from "jotai";
import {TOKEN} from "../../store";

function LoginPanel() {

    const [token, setToken] = useAtom(TOKEN);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginHandler(event) {
        const myHeaders = new Headers();
        myHeaders.append("", "");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("username", email);
        urlencoded.append("password", password);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/login", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div className={classes.content}>
            <span>Login</span>
            <div className="row">
                <div className="input-field row s6">
                    <input id="email" type="email" className="validate" onChange={e => {setEmail(e.target.value)}}/>
                    <label className="active" htmlFor="email">Email</label>
                </div>
                <div className="input-field row s6">
                    <input id="password" type="password" className="validate" onChange={e => {setPassword(e.target.value)}}/>
                    <label className="active" htmlFor="password">password</label>
                </div>
                <a className="waves-effect waves-light btn-small" onClick={loginHandler}>Login</a>
            </div>
        </div>
    )
}

export default LoginPanel;