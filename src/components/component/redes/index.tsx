import React from "react";
import * as s from "./style"
import insta from "../../../../imagens/instagram.svg"
import linkedin from "../../../../imagens/linkedin.svg"
import github from "../../../../imagens/github.svg"


const Redes: React.FC = () => {
    return(
        <s.Container>
            <s.Title>Redes Sociais</s.Title>
            <s.Div>
                <s.Link href="https://www.instagram.com/gusdiaso/" target="_blank">
                    <s.Image src={insta} alt="Logo Instagram" />
                </s.Link>
                <s.Link href="https://www.linkedin.com/in/gusdiaso/" target="_blank">
                    <s.Image src={linkedin} alt="Logo Linkedin" />
                </s.Link>
                <s.Link href="https://github.com/gusdiaso" target="_blank">
                    <s.Image src={github} alt="Logo GitHub" />
                </s.Link>
            </s.Div>
        </s.Container>
    )
}

export default Redes