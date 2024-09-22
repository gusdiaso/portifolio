import React, { useState } from "react";
import * as s from "./style"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cardprojeto from "../cardprojeto";
import serra from "../../../../imagens/serrajr.png"
import prownovar from "../../../../imagens/prownovar.png"
import m3 from "../../../../imagens/m3.png"
import searchmap from "../../../../imagens/searchmap.jpg"
import searchmusic from "../../../../imagens/searchmusic.jpg"
import nanofab from "../../../../imagens/nanofab.png"
import ppgctm from "../../../../imagens/ppgctm.png"
import SobreProjeto from "../sobreprojeto";
import { ProjectProps } from "../sobreprojeto/type"

const Projetos: React.FC = () => {
    const projects = [
        {   
            nome:"serra",
            image: serra,
            description: "imagem referente ao projeto da Serra Junior",
            sobre: "Durante um período de aproximadamente quatro meses, participei do desenvolvimento do site da Serra Junior Engenharia, com o objetivo de criar uma plataforma clara e intuitiva que apresentasse nossa empresa júnior e destacasse nossos serviços. O projeto foi desenvolvido utilizando React e TypeScript, e eu tive a responsabilidade de fazer o desenvolvimento front-end. Assim, tive que garantir que o design fosse responsivo e otimizado para proporcionar uma experiência do usuário agradável. Utilizamos ferramentas como Git e GitHub para o controle de versão e colaboração eficiente. Como resultado, o site foi entregue dentro do prazo e contribuiu para aumentar a visibilidade da empresa no mercado, atraindo novos clientes e fortalecendo nossa presença online.",
            link: "https://www.serrajr.eng.br/"
        },
        {
            nome:"prownovar",
            image: prownovar,
            description: "imagem referente ao projeto da Prownovar",
            sobre: "Em aproximadamente três meses, desenvolvi junto a equipe o site da PROWNOVAR utilizando React e JavaScript, com o objetivo de criar uma plataforma acessível e informativa para destacar os produtos e serviços da empresa. O site foi projetado para oferecer uma experiência de navegação intuitiva, garantindo que as informações sobre as soluções oferecidas pela PROWNOVAR fossem facilmente encontradas pelos usuários. Trabalhei na implementação de um design responsivo e na otimização da interface, sempre focando em entregar uma plataforma eficiente que destacasse os valores e diferenciais da empresa. Utilizando ferramentas de controle de versão como Git e GitHub, garantimos o desenvolvimento fosse colaborativo e organizado. O resultado foi um site funcional e bem estruturado, que aumentou a visibilidade da empresa e melhorou a comunicação com os clientes.",
            link: "https://prownovar.com.br/"
        },
        {
            nome:"m3",
            image: m3,
            description: "imagem referente ao projeto de Treinamento da M3",
            sobre: "Em aproximadamente uma semana, desenvolvi uma landing page como parte de um curso que fiz na M3, com o objetivo de aprender a utilizar HTML, CSS e JavaScript de maneira responsiva e visualmente atraente. Durante o processo, trabalhei para criar uma interface moderna, focada em boas práticas de design, como layouts flexíveis. O projeto me permitiu aprimorar minhas habilidades em criação de páginas web que se adaptam a diferentes dispositivos, garantindo uma experiência de navegação consistente. Como resultado, a landing page foi finalizada com sucesso, representando um marco importante no meu aprendizado sobre desenvolvimento front-end e design responsivo.",
            link: "https://gusdiaso.github.io/landingPage_cursoM3_1.0/"
        },
        {
            nome:"searchmap",
            image: searchmap,
            description: "imagem referente ao projeto Search Map",
            sobre: "Desenvolvi um aplicativo usando Expo e React Native como parte de um treinamento para consolidar e aprender novas habilidades. O aplicativo permitia ao usuário digitar o nome de um local e, ao fazer isso, retornava as coordenadas e outras informações relevantes, exibindo a localização no mapa. Além disso, implementei uma funcionalidade que salvava o nome do local e suas coordenadas em um histórico, proporcionando um recurso útil para os usuários. Foquei em criar um design atraente e intuitivo, garantindo uma experiência agradável e interativa. Esse projeto foi crucial para aprofundar meu conhecimento em integração de APIs, Mapas e no desenvolvimento de interfaces responsivas com React Native.",
            link: "https://expo.dev/preview/update?message=preview&updateRuntimeVersion=1.0.0&createdAt=2024-06-06T23%3A34%3A53.466Z&slug=exp&projectId=dd5b3727-9fa4-482f-b33a-8ad2a9b2375c&group=2c54ec60-31d7-4db9-a214-0cbd465caa79"
        },
        {
            nome:"searchmusic",
            image: searchmusic,
            description: "imagem referente ao projeto Search Music",
            sobre: "Desenvolvi um aplicativo usando Expo e React Native como parte de um treinamento com o objetivo de consolidar e aprender novas habilidades. O aplicativo utilizava uma API para retornar uma música aleatória ao digitar o nome de um cantor, proporcionando uma experiência interativa e envolvente para o usuário. Além da funcionalidade de busca, me concentrei em criar um design atraente e intuitivo, garantindo que a interface fosse visualmente agradável e fácil de usar. Esse projeto foi fundamental para fortalecer meu conhecimento em integração de APIs e aprimorar minhas habilidades em desenvolvimento de interfaces responsivas no React Native.",
            link: "https://expo.dev/preview/update?message=preview&updateRuntimeVersion=1.0.1&createdAt=2024-06-06T23%3A26%3A31.795Z&slug=exp&projectId=a698f390-c609-4b78-8cbc-13b9470a0bd0&group=2ea1871c-cfbf-4dab-9d76-b6e5cc58b301"
        },
        {
            nome:"nanofab",
            image: nanofab,
            description: "imagem referente ao projeto do Nanofab",
            sobre: "Durante um período de cerca de quatro meses, desenvolvi junto a equipe o site do Nanofab, o Laboratório de Nanotecnologia da UERJ, utilizando React e TypeScript. O objetivo principal era criar uma plataforma informativa que oferecesse uma visão clara das instalações, serviços, projetos em andamento e pesquisas realizadas pela universidade no campo da nanotecnologia. Além de garantir que o site fosse responsivo e de fácil navegação, trabalhei para otimizar a experiência do usuário, facilitando o acesso às informações de forma estruturada. Utilizamos Git e GitHub para gerenciar o versionamento do código e garantir uma colaboração eficiente. O resultado foi um site funcional e visualmente atraente, que melhorou a divulgação das atividades do laboratório e fortaleceu a comunicação com a comunidade acadêmica e industrial.",
            link: "http://www.nanofab.uerj.br/"
        },
        {
            nome:"ppgctm",
            image: ppgctm,
            description: "imagem referente ao projeto PPGCTM",
            sobre: "Ao longo de cerca de cinco meses, desenvolvi o site do Programa de Pós-Graduação em Ciência e Tecnologia de Materiais (PPGCTM) do IPRJ-UERJ, utilizando WordPress. O objetivo era criar uma plataforma que fornecesse informações detalhadas sobre o programa, como os cursos oferecidos, linhas de pesquisa, corpo docente e eventos relacionados à ciência e tecnologia de materiais. Minha responsabilidade incluía garantir que o site fosse intuitivo e de fácil navegação, com um design responsivo para melhorar a experiência dos usuários, especialmente estudantes e pesquisadores. Trabalhei na personalização de temas e na organização das informações de forma clara e acessível, garantindo a atualização constante de conteúdos relevantes. Como resultado, o site tornou-se uma importante ferramenta de comunicação entre o programa e a comunidade acadêmica, facilitando o acesso às informações e fortalecendo a presença online do PPGCTM.",
            link: "https://www.ppgctm.iprj.uerj.br/"
        },
    ] 

    const [isOpen, setIsOpen] = useState(false)
    const [projectSelected, setProjectSelected] = useState<ProjectProps|null>(null)


    return(
        <s.Container id="projetos">
            <s.Title>Projetos</s.Title>
            <s.Description>Clique no projeto para saber mais!</s.Description>
            <s.Content>

            {
                projects.map((eachproject, index) => {
                    return (
                    <Cardprojeto 
                        key={index} 
                        image={eachproject.image} 
                        description={eachproject.description} 
                        classe={eachproject.nome}
                        onClick={() => {
                            setIsOpen(true)
                            setProjectSelected(
                                {
                                    nome: eachproject.nome,
                                    image: eachproject.image,
                                    description: eachproject.description,
                                    sobre: eachproject.sobre,
                                    link: eachproject.link
                                }
                            )
                        }}
                    />
                    );
                })
            }

            {isOpen && 
            <SobreProjeto 
                fechar={()=>{
                    setIsOpen(false)
                }}
                data={projectSelected}  
            />}

            </s.Content>
        </s.Container>
    )
}

export default Projetos