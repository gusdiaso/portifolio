import React from "react";
import * as s from "./style"
import CardProjeto from "../cardprojeto";
import serra from "../../../../imagens/serrajr.png"
import prownovar from "../../../../imagens/prownovar.png"
import m3 from "../../../../imagens/m3.png"
import Carousel from "../carousel";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Projetos: React.FC = () => {

    const slides = [
        <CardProjeto key="1" dest={serra} nome={"Site Serra Junior (Pela Empresa)"} link={"https://www.serrajr.eng.br/"}/>,
        <CardProjeto key="2" dest={prownovar} nome={"Site Prownovar (Pela Empresa)"} link={"https://prownovar.com.br/"}/>,
        <CardProjeto key="3" dest={m3} nome={"Site M3 Academy treinamento"} link={"https://gusdiaso.github.io/cursoM3LandingPage_2.0/"}/>
      ];

    return(
        <s.Container id="projetos">
            <s.Title>Projetos</s.Title>
            <s.Carrossel>
                <Carousel slides={slides} />
            </s.Carrossel>
        </s.Container>
    )
}

export default Projetos