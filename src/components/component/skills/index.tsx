import React from "react";
import * as s from "./style"
import Cardskill from "../cardskill";

const Skills: React.FC = () => {
    return(
        <s.Container id="skills">
            <s.Title>Skills</s.Title>
            <s.Grupo>
                <Cardskill dest="../../../../imagens/html.png" nome={"HTML"}/>
                <Cardskill dest="../../../../imagens/css.png" nome={"CSS"}/>
                <Cardskill dest="../../../../imagens/js.png" nome={"JavaScript"}/>
                <Cardskill dest="../../../../imagens/react.png" nome={"React"}/>
                <Cardskill dest="../../../../imagens/typescript.png" nome={"TypeScript"}/>
                <Cardskill dest="../../../../imagens/github.png" nome={"GitHub"}/>

            </s.Grupo>
        </s.Container>
    )
}

export default Skills