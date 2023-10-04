import React from "react";
import * as s from "./style"
import Linkedin from "../../../../imagens/linkedin.svg"
import Instagram from "../../../../imagens/instagram.svg"
import GitHub from "../../../../imagens/github.svg"



const Redes: React.FC = () => {
    return(
        <s.Container>
            <s.Title>Gustavo</s.Title>
            <s.Div>
                <s.Link href="https://www.instagram.com/gusdiaso/" target="_blank"><s.Image src={Instagram} alt="Logo Instagram" /></s.Link>
                <s.Link href="https://www.linkedin.com/in/gustavodias-/" target="_blank"><s.Image src={Linkedin} alt="Logo Linkedin" /></s.Link>
                <s.Link href="https://github.com/gusdiaso" target="_blank"><s.Image src={GitHub} alt="Logo GitHub" /></s.Link>
            </s.Div>
            <s.Text>@2023 - Site desenvolvido por Gustavo Dias</s.Text>
        </s.Container>
    )
}

export default Redes