import React from "react";
import * as s from "./style"
import { SobreProjetoProps } from "./type";


const SobreProjeto: React.FC<SobreProjetoProps> = ({ fechar, data }) => {
    return(
        <s.Container>
            <s.Fechar onClick={fechar}>&times;</s.Fechar>
            <s.Image src={data?.image}/>
            <s.Info>
                <s.Title>Sobre o projeto {data?.nome}</s.Title>
                <s.Description>{data?.sobre}</s.Description>
                {
                    data?.link && <s.link href={data?.link} target="_blank">Link do projeto</s.link>
                }
            </s.Info>
        </s.Container>
    )
}

export default SobreProjeto