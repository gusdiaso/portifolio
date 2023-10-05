import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: rgb(255,183,95);
    background: radial-gradient(circle, rgba(255,183,95,1) 0%, rgba(255,140,0,1) 100%, rgba(255,140,0,1) 100%);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const InputText = styled.textarea`
    padding: 0.8rem 0.8rem;
    font-size: 1rem;
    height: 5.2rem;
    border-radius: 30px;
    text-align: justify;
    hyphens: auto;
    border: none;
    outline: none;
    resize: none;
    width: 40vw;
    max-width: 1000px;

    @media screen and (max-width: 790px){
        width: 90vw;

    }

    &::-webkit-scrollbar-track {
        background-color: #00000000;
    }

    &::-webkit-scrollbar-thumb {
        background: #00000055;
        border-radius: 10px;
    }
`;

export const Input = styled.input`
    padding: 0.4rem 0.8rem;
    font-size: 1rem;
    border-radius: 30px;
    border: none;
    outline: none;
    width: 40vw;
    max-width: 1000px;

    @media screen and (max-width: 790px){
        width: 90vw;
    }
`;

export const Botao = styled.button`
    padding: 0.8rem 4rem;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 30px;
    margin-top: 1rem;

    
    &:hover{
        cursor: pointer;
        background-color: #ec7e00;
        color: #fff;
        transition: 0.2s;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 790px){
        font-size: 2rem;
    }
`;