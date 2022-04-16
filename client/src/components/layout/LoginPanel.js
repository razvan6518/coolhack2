import classes from "./Login.module.css"
import {useState} from "react";
import {useAtom} from "jotai";
import {NAME, TOKEN, USER, USER_ROLE} from "../../store";

function LoginPanel() {

    const [token, setToken] = useAtom(TOKEN);
    const [userName, setUserName] = useAtom(NAME);
    const [user, setUser] = useAtom(USER);
    const [userRole, setUserRole] = useAtom(USER_ROLE);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginHandler(event) {
        event.preventDefault();
        const myHeaders = new Headers();
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
            .then(result => {
                result = JSON.parse(result);
                if (result.access_token !== undefined) {
                    setToken(result.access_token);

                    const requestOptions = {
                        method: 'GET',
                        redirect: 'follow'
                    };

                    fetch("http://localhost:5000/api/user/email/"+ email, requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            setUser(JSON.parse(result));
                            console.log("user ", JSON.parse(result))
                            setUserName(JSON.parse(result)['firstName']);
                            setUserRole(JSON.parse(result)['roles'][0]);
                        })
                        .catch(error => console.log('error', error));
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className={classes.content}>
            <h5 className="cyan-text">Login</h5>
            <div className="row">
                <div className="input-field row s6">
                    <input id="email" type="email" className="validate" onChange={e => {setEmail(e.target.value)}}/>
                    <label className="activ" htmlFor="email">Email</label>
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