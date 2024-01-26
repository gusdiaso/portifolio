import React from "react";
import * as s from "./style"
import { FilhoProps } from './type';


const Cardskill: React.FC<FilhoProps> = (props) => {
    return(
        <s.Container>
          <s.Image src={props.dest} alt="" />
          <s.text>{props.nome}</s.text>
        </s.Container>
    )
}

export default Cardskill