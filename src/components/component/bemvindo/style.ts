import { styled } from "styled-components";

export const Container = styled.div`
    padding-top: 5vh;
    position: relative;
    width: 100%;
    background: #000000;
    background: linear-gradient(350deg, rgba(0,0,0,1) 45%, rgba(242,145,27,1) 80%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 7vh;
    justify-content: center;
    z-index: -2;

    @media screen and (max-width: 1410px) {
        align-items: center;
        padding-top: 15vh;

    }
`;

export const Image = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 80vh;
    max-width: 100%;
    object-fit: cover;
    opacity: 60%;
    z-index: -1;
    /* filter: blur(4px); */

    @media screen and (max-width: 1410px) {
        position: relative;
        object-fit: cover;
        width: 50%;
        height: auto;
        bottom: auto;
        right: auto;

    }
`;

export const Subtitle = styled.h1`
    color: #fff;
    font-weight: 100;
    font-size: 4rem;

    @media screen and (max-width: 1750px) {
        max-width: 600px;
    }

    @media screen and (max-width: 1410px) {
        max-width: 70vw;
        width: 70vw;
        text-align: center;
    }

    @media screen and (max-width: 790px){
        font-size: 3rem;
    }
    
    @media screen and (max-width: 520px) {
        font-size: 2rem;
    }
`;

export const Title = styled.h1`
    color: #fff;
    font-family: 'Young Serif', serif;
    font-weight: 100;
    font-size: 4rem;

    @media screen and (max-width: 1410px) {
        text-align: center;
    }

    @media screen and (max-width: 790px){
        font-size: 3rem;
    }

    @media screen and (max-width: 520px) {
        font-size: 2rem;
    }
`;


export const Text = styled.p`
    color: #fff;
    text-align: justify;
    hyphens: auto;
    width: 45vw;
    max-width: 80vw;
    font-size: 1.6rem;
    margin-left: 8vw;

    @media screen and (max-width: 1490px) {
        width: 35vw;
    }
    
    @media screen and (max-width: 1410px) {
        width: 70vw;
        margin-left: 0;
    }

    @media screen and (max-width: 790px){
        font-size: 1.2rem;
    }

`;

export const Titles = styled.div`
    display: flex;
    width: 1200px;
    max-width: 80vw;
    flex-direction: column;
    gap: 4vh;
    margin-left: 8vw;

    @media screen and (max-width: 1410px) {
        justify-content: center;
        align-items: center;
        margin-left: 0;
    }
    
`;

export const Span = styled.span`
    color: #F2911B;
`;


export const Button = styled.button`

`;