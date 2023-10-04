import React from "react";
import { Container } from "./style"
import Navbar from "../component/navbar";
import Bemvindo from "../component/bemvindo";

const Header: React.FC = () => {
    return(
        <Container>
            <Navbar/>
            <Bemvindo/>
        </Container>
    )
}

export default Header