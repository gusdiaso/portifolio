import React from "react";
import * as s from "./style"
import Cardskill from "../cardskill";
import html from "../../../../imagens/html.png"
import css from "../../../../imagens/css.png"
import js from "../../../../imagens/js.png"
import ts from "../../../../imagens/typescript.png"
import react from "../../../../imagens/react.png"
import github from "../../../../imagens/github.png"


const Skills: React.FC = () => {
    return(
        <s.Container id="skills">
            <s.Title>Skills</s.Title>
            <s.Grupo>
                <Cardskill dest={html} nome={"HTML"}/>
                <Cardskill dest={css} nome={"CSS"}/>
                <Cardskill dest={js} nome={"JavaScript"}/>
                <Cardskill dest={react} nome={"React"}/>
                <Cardskill dest={ts} nome={"TypeScript"}/>
                <Cardskill dest={github} nome={"GitHub"}/>

            </s.Grupo>
        </s.Container>
    )
}

export default Skills