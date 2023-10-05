import React, { useState } from "react";
import * as s from "./style";
import { StyleSheetManager } from 'styled-components';

const Navbar: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return(
        <s.Container>
           <s.Title href="/">Gustavo</s.Title>
           <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isopen'}>
                <s.Div isopen={isMenuOpen}>
                    <s.Link href="#home" onClick={openMenu}>Home</s.Link>
                    <s.Link href="" onClick={openMenu}>Sobre</s.Link>
                    <s.Link href="" onClick={openMenu}>Skills</s.Link>
                    <s.Link href="" onClick={openMenu}>Portifólio</s.Link>
                    <s.Link href="#contato" onClick={openMenu}>Contato</s.Link>
                </s.Div>
            </StyleSheetManager>
           <s.Hamburguer onClick={openMenu}>
                <s.Fatias/>
                <s.Fatias/>
                <s.Fatias/>
            </s.Hamburguer>
        </s.Container>
    )
}

export default Navbar