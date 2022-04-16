import AllFarmsPage from "../../pages/AllFarmsPage";
import AllProductsPage from "../../pages/AllProductsPage";
import classes from "./Navbar.module.css";
import M from "materialize-css";
import options from "materialize-css";
import {useEffect, useState} from "react";
import LoginPanel from "./LoginPanel";
import UserPanel from "./UserPanel";
import RegisterPanel from "./RegisterPanel";
import {useAtom} from "jotai";
import {NAME, SIDEBAR_CONTENT, TOKEN, USER, USER_ROLE} from "../../store";
import {useNavigate} from "react-router-dom";

function Navbar(props) {
    const [sidenavInstance, setSidenavInstance] = useState();
    const [token, setToken] = useAtom(TOKEN);
    const [USERNAME, setUSERNAME] = useAtom(NAME);
    const [userRole, setUserRole] = useAtom(USER_ROLE);
    const [user, setUser] = useAtom(USER);
    // const [sidebarContent, setSidebarContent] = useAtom(SIDEBAR_CONTENT);



    const navigate = useNavigate();

    function openLoginPanel() {
        console.log("opening");
        props.setSidebarContent(<LoginPanel/>)
        sidenavInstance.open();
        const sidenavOverlay = document.querySelector(".sidenav-overlay");
        console.log("overlay ", sidenavOverlay);
    }

    function openRegisterPanel() {
        console.log("opening");
        props.setSidebarContent(<RegisterPanel/>)
        console.log("sidebar ", props.sidebarContent);
        sidenavInstance.open();
    }

    function logOut() {
        setUSERNAME("");
        setUser({});
        setUserRole("");
        props.setSidebarContent(<LoginPanel/>);
    }

    useEffect(() => {
        // sidebar
        let sidenav = document.querySelector('#slide-out');
        setSidenavInstance(M.Sidenav.init(sidenav, {}));
        const sidenavOverlay = document.querySelector(".sidenav-overlay");
        sidenavOverlay.style.marginLeft = "17.5%";

        if (Object.keys(user).length !== 0) {
            props.setSidebarContent(<UserPanel/>);
        }
    }, [user])

    function highlightClicked(event) {
        const buttons = document.querySelectorAll("a");
        for (let button of buttons) {
            console.log("okkkk");
            button.classList.remove("yellow", "darken-2")
        }
        event.target.classList.add("yellow", "darken-2");
    }

    return (
        <div className={classes.navbarDiv}>
            <nav className={classes.navbar}>
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i
                    className="material-icons">menu</i></a>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a>Logo</a></li>
                        <li><a className="yellow darken-2" onClick={(e) => {
                            navigate(`/all-farms`);
                            highlightClicked(e);
                        }}>Farms</a></li>
                        <li><a onClick={(e) => {
                            navigate(`/products`);
                            highlightClicked(e);
                        }}>Products</a></li>
                    </ul>
                    {USERNAME === '' &&
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a className={classes.btn} onClick={openLoginPanel}>Login</a></li>
                            <li><a className={classes.btn} onClick={openRegisterPanel}>Register</a></li>
                        </ul>
                    }
                    {USERNAME !== '' &&
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className={classes.welcome}>Welcome {USERNAME}</li>
                            <li><a className={classes.btn} onClick={logOut}>Log out</a></li>
                        </ul>
                    }
                </div>
            </nav>
            <ul id="slide-out" className={classes.sidenav + " " + "sidenav"}>
                {props.sidebarContent}
            </ul>
        </div>
    )
}

export default Navbar;