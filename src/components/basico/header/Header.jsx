import React from "react";
import './Header.css'

export default function Header(){

    function menuMobile(){
        
    }

    return(
        <header>
            <nav>
            <div className="menu-mobile">
                    <p>Menu</p>
                    <div className="box-menu" onClick={menuMobile}>
                        <div className="linha1"></div>
                        <div className="linha2"></div>
                        <div className="linha3"></div>
                    </div>
                </div>
                <div className="header-menu"> <a href="/">Sobre</a>
                    <a href="/">Conhecimento</a>
                    <a href="/">Projetos</a>
                    <a href="/">Contato</a>
                    <a href="/">Joguinho</a>
                </div>
            </nav>
        </header>
    )
}