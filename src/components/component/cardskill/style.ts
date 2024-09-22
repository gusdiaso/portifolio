import { styled } from "styled-components";


export const Container = styled.div`
    background-color: #121212aa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding: 1rem;
    border-radius: 10px;
`;

export const Image = styled.img`
    max-height: 100px;
    max-width: 100px;
    object-fit: cover;

    @media screen and (max-width: 1024px) {
        max-height: 80px;
        max-width: 80px;
    }

    @media screen and (max-width: 425px){
        max-height: 50px;
        max-width: 50px;
    }
    
`;

export const text = styled.h3`
    text-align: center;
    margin-top: 1rem;

    @media screen and (max-width: 1024px) {
        font-size: 0.9rem;
    }
`;

