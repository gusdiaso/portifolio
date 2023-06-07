import React from "react";
import './Footer.css'
import github from './images/GitHub.png'
import linkedin from './images/LinkedIn.png'
import instagram from './images/Instagram.png'


export default function Footer(){
    return(
        <div className="footer">
            <div className="redes">
                <a href="/"><img src={github} alt="" /></a>
                <a href="/"><img src={linkedin} alt="" /></a>
                <a href="/"><img src={instagram} alt="" /></a>

            </div>
            <p>criado por <strong>Gustavo Dias</strong></p>
        </div>
    )
}