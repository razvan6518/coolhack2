import AllFarmsPage from "../../pages/AllFarmsPage";
import AllProductsPage from "../../pages/AllProductsPage";
import M from "materialize-css";
import options from "materialize-css";
import {useEffect, useState} from "react";
import LoginSideBar from "./LoginSideBar";
import UserSideBar from "./UserSideBar";

function Navbar(props) {
    // let sidebarContent = <LoginSideBar></LoginSideBar>;

    function farmsPageClickHandler() {
        props.setCurrentPage(<AllFarmsPage/>)
    }

    function productsPageClickHandler() {
        props.setCurrentPage(<AllProductsPage/>)
    }

    useEffect(() => {
        // sidebar
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});

    })

    function login() {
        props.setSidebarContent(<UserSideBar/>)
    }

    return (
        <div>
            <nav>
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons" >menu</i></a>
                {/*<div className="nav-wrapper">*/}
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a>Logo</a></li>
                        <li><a onClick={farmsPageClickHandler}>Farms</a></li>
                        <li><a onClick={productsPageClickHandler}>Products</a></li>
                        <li><a onClick={login}>Login</a></li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                {/*</div>*/}
            </nav>
            <ul id="slide-out" className="sidenav">
                {props.sidebarContent}
            </ul>
        </div>


    )
}

export default Navbar;