import React from "react";
import * as s from "./style"

const Redes: React.FC = () => {
    return(
        <s.Container>
            <s.Title>Gustavo</s.Title>
            <s.Div>
                <s.Link href="https://www.instagram.com/gusdiaso/" target="_blank">
                    <s.Image src="../../../../imagens/instagram.svg" alt="Logo Instagram" />
                </s.Link>
                <s.Link href="https://www.linkedin.com/in/gustavodias-/" target="_blank">
                    <s.Image src="../../../../imagens/linkedin.svg" alt="Logo Linkedin" />
                </s.Link>
                <s.Link href="https://github.com/gusdiaso" target="_blank">
                    <s.Image src="../../../../imagens/github.svg" alt="Logo GitHub" />
                </s.Link>
            </s.Div>
            <s.Text>@2024 - Site desenvolvido por Gustavo Dias</s.Text>
        </s.Container>
    )
}

export default Redes