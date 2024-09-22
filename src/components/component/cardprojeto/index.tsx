import React from "react";
import * as s from "./style"
import { CardprojetoProps } from "./type";


const Cardprojeto: React.FC<CardprojetoProps> = ({image, description, classe, onClick}) => {
    return(
        <s.Container className={classe} onClick={onClick}>
          <s.Image src={image} alt={description} />
        </s.Container>
    )
}

export default Cardprojeto