import React from "react";
import * as s from "./style"
import { CardprojetoProps } from "./type";
import "./cardprojetos.css"


const Cardprojeto: React.FC<CardprojetoProps> = ({image, description, classe, onClick}) => {
    return(
        <s.Container id="card" className={classe} onClick={onClick}>
          <s.Image src={image} alt={description} />
        </s.Container>
    )
}

export default Cardprojeto