import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    gap: 1.2rem;
    padding: 2.5rem;
`;

export const Title = styled.h2`
    font-size: 2.5rem;

    @media screen and (max-width: 790px){
        font-size: 1.8rem;
    }
`;

export const Div = styled.div`
    display: flex;
    gap: 0.6rem;
`;

export const Text = styled.p`
    text-align: center;

    @media screen and (max-width: 790px){
        font-size: 0.8rem;
    }
`;

export const Link = styled.a`
`;

export const Image = styled.img`
    max-width: 40px;
    padding: 4px;
    filter: hue-rotate(-135deg) saturate(5) brightness(50);
    border-radius: 50%;

    &:hover{
        cursor: pointer;
        transition: 0.2s;
        opacity: 0.4;



    }
`;