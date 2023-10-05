import React, { useState, FormEvent, ChangeEvent } from "react";
import * as s from "./style";
import emailjs from "@emailjs/browser";

const Contato: React.FC = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        if(name === "" || email === "" || text === ""){
            alert("Preencha todos os campos!");
            return;
        }

        const templateParams = {
            from_name: name,
            message: text,
            email: email
        }

        emailjs.send("service_u2e966f", "template_v80h1sk", templateParams, "FaQC6LUdnoFnYy_dE")
        .then((response) => {
            console.log("email enviado!", response.status, response.text);
            alert("Email enviado com sucesso!")
            setName("");
            setEmail("");
            setText("");
        }, (err) => {
            console.log("ERRO: ", err);
        });
    }

    return(
        <s.Container>
            <s.Title id="contato">Contate-me</s.Title>
            <s.Input type="text" placeholder="Nome" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
            <s.Input type="email" name="email" id="email" placeholder="Email" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
            <s.InputText placeholder="Mensagem" onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}/>
            <s.Botao onClick={sendEmail}>Enviar Email</s.Botao>
        </s.Container>
    )
}

export default Contato