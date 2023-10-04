import React from "react";
import * as s from "./style"
import Contato from "../component/contato";
import Redes from "../component/redes";


const Footer: React.FC = () => {
    return(
        <s.Container>
            <Contato/>
            <Redes/>
        </s.Container>
    )
}

export default Footer