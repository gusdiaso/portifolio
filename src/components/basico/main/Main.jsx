import React from "react";
import './Main.css'
import { Routes, Route } from "react-router-dom";
import Sobre from "../../../views/examples/home/home";
import Projeto from "../../../views/examples/projetos/Projeto";
import Contato from "../../../views/examples/contato/Contato";
import Game from "../../../views/examples/game/Game";

export default function Main(){
    return(
        <div className="main">
            <Routes>
                <Route path="/projeto" element={<Projeto />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/game" element={<Game />} />
                <Route path="/" element={<Sobre />} />
            </Routes>
        </div>
        
    )
}
