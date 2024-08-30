import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #121212;
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
    object-fit: cover
    
`;

export const text = styled.h3`
    text-align: center;
    margin-top: 1rem;
`;
