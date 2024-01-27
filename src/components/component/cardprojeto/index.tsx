import React from "react";
import * as s from "./style"
import { FilhoProps } from './type';


const CardProjeto: React.FC<FilhoProps> = (props) => {
    return(
      <s.Container>
        <s.Link target="_blank" href={props.link}>
          <s.Image src={props.dest} alt="" />
          <s.Text>{props.nome}</s.Text>
        </s.Link>
      </s.Container>
    )
}

export default CardProjeto