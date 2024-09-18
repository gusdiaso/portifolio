import { styled } from "styled-components";

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
    margin-bottom: 2rem;

    @media screen and (max-width: 790px){
        font-size: 2rem;
    }

    @media screen and (max-width: 600px){
      font-size: 1.5rem;
    }
`;

export const Content = styled.div`
    width: 50%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 5vw);

`;
