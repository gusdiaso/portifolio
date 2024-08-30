import React from "react";
import * as s from "./style"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cardprojeto from "../cardprojeto";
import serra from "../../../../imagens/serrajr.png"
import prownovar from "../../../../imagens/prownovar.png"
import m3 from "../../../../imagens/m3.png"
import searchmap from "../../../../imagens/searchmap.jpg"
import searchmusic from "../../../../imagens/searchmusic.jpg"
import nanofab from "../../../../imagens/nanofab.png"
import ppgctm from "../../../../imagens/ppgctm.png"



const Projetos: React.FC = () => {
    const images = [
        {   
            nome:"serra",
            image: serra,
            description: "imagem referente ao projeto da Serra Junior",
            sobre: "",
            link: ""
        },
        {
            nome:"prownovar",
            image: prownovar,
            description: "imagem referente ao projeto da Prownovar",
            sobre: "",
            link: ""
        },
        {
            nome:"m3",
            image: m3,
            description: "imagem referente ao projeto de Treinamento da M3",
            sobre: "",
            link: ""
        },
        {
            nome:"searchmap",
            image: searchmap,
            description: "imagem referente ao projeto Search Map",
            sobre: "",
            link: ""
        },
        {
            nome:"searchmusic",
            image: searchmusic,
            description: "imagem referente ao projeto Search Music",
            sobre: "",
            link: ""
        },
        {
            nome:"nanofab",
            image: nanofab,
            description: "imagem referente ao projeto do Nanofab",
            sobre: "",
            link: ""
        },
        {
            nome:"ppgctm",
            image: ppgctm,
            description: "imagem referente ao projeto do PPGCTM",
            sobre: "",
            link: ""
        },
    ] 
    return(
        <s.Container id="projetos">
            <s.Title>Projetos</s.Title>
            <s.Content>
            {
                images.map((eachproject, index) => {
                    return (
                    <Cardprojeto 
                        key={index} 
                        image={eachproject.image} 
                        description={eachproject.description} 
                        classe={eachproject.nome}
                    />
                    );
                })
            }
                </s.Content>
        </s.Container>
    )
}

export default Projetos