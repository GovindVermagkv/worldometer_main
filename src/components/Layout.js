import { React } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import "../App.css";

const Layout = () => {
    return (
        <>
            <div id='layout_container'>
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}
export default Layout;