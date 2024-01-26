import React from "react";
import { Container } from "./style"
import Skills from "../component/skills";
import Projetos from "../component/projetos";
import Estudos from "../component/estudos";

const Main: React.FC = () => {
    return(
        <Container>
            <Skills/>
            <Estudos/>
            <Projetos/>
        </Container>
    )
}

export default Main