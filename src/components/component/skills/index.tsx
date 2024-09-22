import React from "react";
import * as s from "./style"
import Cardskill from "../cardskill";
import html from "../../../../imagens/html.png"
import css from "../../../../imagens/css.png"
import js from "../../../../imagens/js.png"
import ts from "../../../../imagens/typescript.png"
import react from "../../../../imagens/react.png"
import github from "../../../../imagens/github.png"
import git from "../../../../imagens/git.png"
import nodejs from "../../../../imagens/nodejs.png"
import py from "../../../../imagens/python.png"
import "./skills.css"


const Skills: React.FC = () => {
    return(
        <s.Container id="skills">
            <s.Title>Habilidades</s.Title>
            <s.Description>Tecnologias que uso no dia a dia!</s.Description>
            <s.Grupo className="cardsgeral">
                <s.CardContainer>
                    <Cardskill dest={html} nome={"HTML"}/>
                    <Cardskill dest={css} nome={"CSS"}/>
                    <Cardskill dest={js} nome={"JavaScript"}/>
                    <Cardskill dest={react} nome={"React"}/>
                    <Cardskill dest={ts} nome={"TypeScript"}/>
                    <Cardskill dest={react} nome={"React Native"}/>
                    <Cardskill dest={git} nome={"Git"}/>
                    <Cardskill dest={github} nome={"GitHub"}/>
                    <Cardskill dest={nodejs} nome={"Node.js"}/>
                    <Cardskill dest={py} nome={"Python"}/>
                    <Cardskill dest={html} nome={"HTML"}/>
                    <Cardskill dest={css} nome={"CSS"}/>
                    <Cardskill dest={js} nome={"JavaScript"}/>
                    <Cardskill dest={react} nome={"React"}/>
                    <Cardskill dest={ts} nome={"TypeScript"}/>
                    <Cardskill dest={react} nome={"React Native"}/>
                    <Cardskill dest={git} nome={"Git"}/>
                    <Cardskill dest={github} nome={"GitHub"}/>
                    <Cardskill dest={nodejs} nome={"Node.js"}/>
                    <Cardskill dest={py} nome={"Python"}/>
                </s.CardContainer>
            </s.Grupo>
        </s.Container>
    )
}

export default Skills