import React from "react";
import * as s from "./style"
import { FilhoProps } from './type';


const CardProjeto: React.FC<FilhoProps> = (props) => {
    return(
      <s.Link target="_blank" href={props.link}>
        <s.Container>
          <s.Image src={props.dest} alt="" />
          <s.Text>{props.nome}</s.Text>
        </s.Container>
      </s.Link>
    )
}

export default CardProjeto