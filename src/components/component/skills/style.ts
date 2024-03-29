import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2.5rem;
    align-items: center;
    flex-direction: column;
    background-color: #000000;
    color: #fff;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 790px){
        font-size: 2rem;
    }
`;

export const Grupo = styled.div`
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 4rem; 
    margin-bottom: 2rem;

    @media screen and (max-width: 720px){
        grid-template-columns: repeat(2, 1fr);

    }

    @media screen and (max-width: 440px){
        grid-template-columns: repeat(1, 1fr);

    }


`;