import styled from "styled-components";
import { DivProps } from './type'

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    display: flex;
    background-color: #1B8EF2;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    padding-inline: 10vw;
    z-index: 999;

    @media screen and (max-width: 790px){
        height: 60px;
    }
`;

export const Title = styled.a`
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &:hover{
        transition: 0.2s;
        color: #000;
    }
`;

export const Hamburguer = styled.div`
    display: none;
    width: 25px;
    height: 25px;
    z-index: 999;

    @media screen and (max-width: 790px) {
        display: flex; 
        justify-content: center;
        align-items: center;
        gap: 5px;
        flex-direction: column;
    }
`;

export const Fatias = styled.div`
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background-color: #fff;
`;

export const Div = styled.div<DivProps>`
    display: flex;
    gap: 30px;
    
    @media screen and (max-width: 790px) {
        display: ${props => props.isopen ? 'flex' : 'none'};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh; 
        justify-content: center;
        align-items: center;
        flex-direction: column;
        backdrop-filter: blur(20px);
        gap: 40px;
    }
`;

export const Link = styled.a`
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover{
        transition: 0.2s;
        color: #000;
    }

    
    @media screen and (max-width: 790px) {
        font-size: 1.5rem;
        text-shadow: 0px 0px 5px #000;
    }
`;