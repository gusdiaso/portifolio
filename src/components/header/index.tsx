import React from "react";
import Navbar from "../component/navbar";
import Bemvindo from "../component/bemvindo";

const Header: React.FC = () => {
    return(
        <>
            <Bemvindo/>
            <Navbar/>
        </>
    )
}

export default Header