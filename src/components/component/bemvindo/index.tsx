import React from "react";
import * as s from "./style";
const Bemvindo: React.FC = () => {
    return(
        <s.Container id="home">
            <s.Titles>
                <s.Title>Bem Vindo!</s.Title>
                <s.Subtitle>Eu sou um <s.Span>Desenvolvedor</s.Span>.</s.Subtitle>
            </s.Titles>
            <s.Text>
            Atualmente estou comprometido em expandir minhas habilidades tanto no front-end quanto no back-end, e em cultivar competências técnicas e linguísticas em um ambiente colaborativo com profissionais experientes. Meu objetivo é ser um profissional altamente qualificado e globalmente competitivo, pronto para enfrentar desafios que impulsionem o desenvolvimento tecnológico.
            </s.Text>
            
            <s.Image src='../../../../imagens/eu.png' alt="" />
            
        </s.Container>
    )
}

export default Bemvindo