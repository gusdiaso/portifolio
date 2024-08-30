import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
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
        height: 100vh;
        background-image: url("https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        z-index: -1;
    }

    &::before{
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        background: linear-gradient(to bottom, #00000000 0, #00000000 60%, #000000 100%);
    }

`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 70px;
`;


export const Title = styled.h1`
    color: #fff;
    font-size: 5rem;

    @media screen and (max-width: 1410px) {
        text-align: center;
    }

    @media screen and (max-width: 790px){
        font-size: 4rem;
    }

    @media screen and (max-width: 520px) {
        font-size: 3rem;
    }
`;

export const Titles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const Span = styled.span`
    color: #ffccff;
    font-size: 30px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 790px){
        font-size: 1.3rem;
    }
`;


export const Button = styled.button`

`;

export const Linkar = styled.a`
    position: absolute;
    bottom: 20px;
    height: 70px;
    width: 70px;
    cursor: pointer;
    &:hover{
        cursor: pointer;
    }
`;