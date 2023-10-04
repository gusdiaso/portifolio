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
                    <s.Link href="">Home</s.Link>
                    <s.Link href="">Sobre</s.Link>
                    <s.Link href="">Skills</s.Link>
                    <s.Link href="">Portifólio</s.Link>
                    <s.Link href="">Contato</s.Link>
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