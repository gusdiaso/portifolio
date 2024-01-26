import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #0B2559;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 1rem;
    margin-inline: auto;

    &:hover{
        background-color: #1B8EF2;
        transition: 0.3s
    }

    @media screen and (max-width: 500px){
        padding: 0.5rem;

    }
`;

export const Image = styled.img`
    max-width: 70vw;
    width: 800px;
    object-fit: cover


    
`;

export const Text = styled.h3`
    text-align: center;
    margin-top: 1rem;
    @media screen and (max-width: 500px){
        font-size: 1rem;

    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: white;
`;