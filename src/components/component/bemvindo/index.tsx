import React from "react";
import * as s from "./style";
import seta from '../../../../imagens/seta para baixo.gif'

const Bemvindo: React.FC = () => {
    return(
        <s.Container id="home">
            <s.Content>

                <s.Titles>
                    <s.Title>Gustavo Dias</s.Title>
                    <s.Span>Desenvolvedor</s.Span>
                </s.Titles>
                
                <s.Linkar href="#projetos">
                    <s.Image src={seta} alt="gif de uma seta para baixo" />
                </s.Linkar>
                
            </s.Content>
        </s.Container>

    )
}

export default Bemvindo