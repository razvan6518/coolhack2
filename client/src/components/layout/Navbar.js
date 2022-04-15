import AllFarmsPage from "../../pages/AllFarmsPage";
import AllProductsPage from "../../pages/AllProductsPage";
import M from "materialize-css";
import options from "materialize-css";
import {useEffect, useState} from "react";
import LoginPanel from "./LoginPanel";
import UserPanel from "./UserPanel";
import RegisterPanel from "./RegisterPanel";

function Navbar(props) {
    // let sidebarContent = <LoginSideBar></LoginSideBar>;
    const [sidenavInstance, setSidenavInstance] = useState();

    function farmsPageClickHandler() {
        props.setCurrentPage(<AllFarmsPage/>)
    }

    function productsPageClickHandler() {
        props.setCurrentPage(<AllProductsPage/>)
    }

    function openLoginPanel() {
        props.setSidebarContent(<LoginPanel/>)
        sidenavInstance.open();
    }

    function openRegisterPanel() {
        props.setSidebarContent(<RegisterPanel/>)
        sidenavInstance.open();
    }

    useEffect(() => {
        // sidebar
        let sidenav = document.querySelector('#slide-out');
        setSidenavInstance(M.Sidenav.init(sidenav, {}));

    }, [])

    return (
        <div>
            <nav>
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons" >menu</i></a>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a>Logo</a></li>
                        <li><a onClick={farmsPageClickHandler}>Farms</a></li>
                        <li><a onClick={productsPageClickHandler}>Products</a></li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a onClick={openLoginPanel}>Login</a></li>
                        <li><a onClick={openRegisterPanel}>Register</a></li>
                    </ul>
                </div>
            </nav>
            <ul id="slide-out" className="sidenav">
                {props.sidebarContent}
            </ul>
        </div>


    )
}

export default Navbar;