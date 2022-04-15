import classes from "./Login.module.css"
import {useEffect, useState} from "react";

function RegisterPanel() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [accountType, setAccountType] = useState("");

    useEffect(() => {

        console.log("type ", accountType);

        const registerButton = document.getElementById("registerButton");

        if (email !== "" && firstName !== "" && lastName !== "" && password !== "" && repeatPassword === password && accountType !== "") {

            registerButton.classList.remove("disabled");
        } else {
            registerButton.classList.add("disabled");
        }
    }, [email, password, repeatPassword, firstName, lastName, accountType])

    function registerHandler(event) {
        // check email in db
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        let response = fetch("http://localhost:5000/api/user/" + email, requestOptions);
        let emailExist = (response.status === 200);

        if (!emailExist) {
            event.preventDefault();
            const user = {
                "email": email,
                "role": accountType,
                "firstName": firstName,
                "lastName": lastName,
                "password": password,
                "repeatedPassword": repeatPassword
            };

            // create account
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({
               user
            });

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:5000/api/user", requestOptions)
                .then(response => response.text())
                .then(() => {
                    window.location.href = '/';
                })
                .catch(error => console.log('error', error));
        }
    }

    return (
        <div className={classes.content}>
            <span>Register</span>
            <div className="row">
                <div className="input-field row s6">
                    <input id="email" type="email" className="validate" onChange={(event) => {
                        setEmail(event.target.value)
                    }}/>
                    <label className="active" htmlFor="email">Email</label>
                </div>
                <div className="input-field row s6">
                    <input id="firstName" type="text" className="validate" onChange={(event) => {
                        setFirstName(event.target.value)
                    }}/>
                    <label className="active" htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field row s6">
                    <input id="lastName" type="text" className="validate" onChange={(event) => {
                        setLastName(event.target.value)
                    }}/>
                    <label className="active" htmlFor="lastName">Last Name</label>
                </div>
                <div className="input-field row s6">
                    <input id="password" type="password" className="validate" onChange={(event) => {
                        setPassword(event.target.value)
                    }}/>
                    <label className="active" htmlFor="password">Password</label>
                </div>
                <div className="input-field row s6">
                    <input id="repeatPassword" type="password" className="validate" onChange={(event) => {
                        setRepeatPassword(event.target.value)
                    }}/>
                    <label className="active" htmlFor="repeatPassword">Repeat password</label>
                </div>
                <p className={classes.left}>Account type: </p>
                <form className={classes.left} onChange={(e) => {
                    setAccountType(e.target.value)
                }}>
                    <p>
                        <label>
                            <input name="group1" type="radio" value="CLIENT"/>
                            <span>Client</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" value="PRODUCER"/>
                            <span>Producer</span>
                        </label>
                    </p>
                </form>
                <a id="registerButton" className="disabled waves-effect waves-light btn-small" onClick={registerHandler}>Register</a>
            </div>
        </div>
    )
}

export default RegisterPanel;