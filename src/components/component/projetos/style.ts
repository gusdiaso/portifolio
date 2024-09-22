import { styled, keyframes } from "styled-components";

const PeloLado = keyframes`

    from{
        opacity: 0%;
        translate: -100vw 0;
    }
    to{
        opacity: 100%;
        translate: 0 0;
    }

`;

const Sugir = keyframes`

    from{
        opacity: 0%;
    }
    to{
        opacity: 100%;
    }

`;

export const Container = styled.div`
    padding: 2.5rem;
    background-color: #000000;
    text-align: center;
    color: #fff;
    padding-top: 70px;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    animation: ${PeloLado} 1ms;
    animation-timeline: view();
    animation-range: cover 0% cover 40%;

    @media screen and (max-width: 790px){
        font-size: 2rem;
    }

    @media screen and (max-width: 600px){
      font-size: 1.5rem;
    }
`;

export const Content = styled.div`
    width: 60%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 5vw);

    @media screen and (max-width: 1024px){
        width: 80%;
    }

    @media screen and (max-width: 768px){
        width: 90%;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, 5vw);
    }

    @media screen and (max-width: 425px){
        grid-template-rows: repeat(22, 5vw);
    
    }


`;

export const Description = styled.h2`
    margin-bottom: 2.5rem;
    font-weight: 300;
    font-size: 1.2rem;
    text-align: center;

    animation: ${PeloLado} 1ms;
    animation-timeline: view();
    animation-range: cover 0% cover 40%;

    @media screen and (max-width: 600px){
      font-size: 0.9rem;
    }
`;