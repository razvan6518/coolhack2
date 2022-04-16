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
import {NAME, TOKEN, USER, USER_ROLE} from "../../store";
import {useNavigate} from "react-router-dom";

function Navbar(props) {
    // let sidebarContent = <LoginSideBar></LoginSideBar>;
    const [sidenavInstance, setSidenavInstance] = useState();
    const [token, setToken] = useAtom(TOKEN);
    const [USERNAME, setUSERNAME] = useAtom(NAME);
    const [userRole, setUserRole] = useAtom(USER_ROLE);
    const [user, setUser] = useAtom(USER);

    const navigate = useNavigate();

    function farmsPageClickHandler() {
        props.setCurrentPage(<AllFarmsPage/>)
    }

    function productsPageClickHandler() {
        props.setCurrentPage(<AllProductsPage/>)
    }

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
        sidenavInstance.open();
    }

    function logOut() {
        setUSERNAME("");
        setUser({});
        setUserRole("");
    }

    useEffect(() => {
        // sidebar
        let sidenav = document.querySelector('#slide-out');
        setSidenavInstance(M.Sidenav.init(sidenav, {}));
        const sidenavOverlay = document.querySelector(".sidenav-overlay");
        sidenavOverlay.style.marginLeft = "17.5%";

    }, [])

    return (
        <div className={classes.navbar}>
            <nav>
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i
                    className="material-icons">menu</i></a>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a>Logo</a></li>
                        <li><a onClick={() => navigate(`/all-farms`)}>Farms</a></li>
                        <li><a onClick={() => navigate(`/products`)}>Products</a></li>
                    </ul>
                    {USERNAME === '' &&
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a onClick={openLoginPanel}>Login</a></li>
                            <li><a onClick={openRegisterPanel}>Register</a></li>
                        </ul>
                    }
                    {USERNAME !== '' &&
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>Welcome {USERNAME}</li>
                            <li><a onClick={logOut}>Log out</a></li>
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