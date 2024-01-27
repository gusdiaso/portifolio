import React from "react";
import * as s from "./style"
import CardProjeto from "../cardprojeto";
import Carousel from "../carousel";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Projetos: React.FC = () => {

    const slides = [
        <CardProjeto key="1" dest="../../../../imagens/serrajr.png" nome={"Site Serra Junior (Pela Empresa)"} link={"https://www.serrajr.eng.br/"}/>,
        <CardProjeto key="2" dest="../../../../imagens/prownovar.png" nome={"Site Prownovar (Pela Empresa)"} link={"https://prownovar.com.br/"}/>,
        <CardProjeto key="3" dest="../../../../imagens/m3.png" nome={"Site M3 Academy (Treinamento)"} link={"https://gusdiaso.github.io/cursoM3LandingPage_2.0/"}/>
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