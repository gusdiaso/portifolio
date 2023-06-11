import React from "react";
import './Header.css'
import { Link } from "react-router-dom";


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
                <div className="header-menu">
                    <Link to="/">Sobre</Link>
                    <Link to="/">Conhecimento</Link>
                    <Link to="/projeto">Projetos</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/game">Joguinho</Link>
                </div>
            </nav>
        </header>
    )
}