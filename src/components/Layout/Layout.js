import { React } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import Main from "../Main/Main";


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