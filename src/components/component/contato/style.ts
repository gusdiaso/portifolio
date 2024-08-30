import { styled } from "styled-components";

export const Container = styled.form`
    width: 100%;
    color: #fff;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top: 70px;
    position: relative;
    background: linear-gradient(320deg, #5fbffe, #6b4fff, #83328a, #6c1e29, #5139ff);
    background-size: 400% 400%;
    animation: animacao 10s ease-in-out infinite;
    position: sticky;

    @keyframes animacao {
        0%{
            background-position: 0% 50%;
        }

        50%{
            background-position: 100% 50%;

        }

        100%{
            background-position: 0% 50%;
        }
    }
    
    &::after{
        content: "";
        opacity: 0.4;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        background-attachment: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url("https://images.unsplash.com/photo-1542382257-80dedb725088?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        z-index: -2;
    }

    

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

    &::-webkit-scrollbar {
    width: 0px;
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
        background-color: #7766ff;
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