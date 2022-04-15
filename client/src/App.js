import {Route, Routes} from "react-router-dom";
import AllFarmsPage from "./pages/AllFarmsPage";
import Navbar from "./components/layout/Navbar";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import {useEffect, useState} from "react";
import './index.css';
import UserSideBar from "./components/layout/UserSideBar";
import LoginSideBar from "./components/layout/LoginSideBar";

function App() {
    const [currentPage, setCurrentPage] = useState(<AllFarmsPage/>);
    const [sidebarContent, setSidebarContent] = useState(<LoginSideBar/>);

    console.log("current page is: ", currentPage);

    return (
        <div className="App">
            <Navbar setCurrentPage={setCurrentPage} sidebarContent={sidebarContent} setSidebarContent={setSidebarContent}/>
            <Routes>
                <Route path="/" element={<HomePage currentPage={currentPage}/>} exact/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
