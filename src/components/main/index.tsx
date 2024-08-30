import React from "react";
import { Container } from "./style"
import Skills from "../component/skills";
import Projetos from "../component/projetos";
import Estudos from "../component/estudos";

const Main: React.FC = () => {
    return(
        <Container>
            <Projetos/>
            <Skills/>
            <Estudos/>
        </Container>
    )
}

export default Main