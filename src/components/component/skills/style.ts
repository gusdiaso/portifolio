import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2.5rem;
    align-items: center;
    flex-direction: column;
    background-color: purple;
    color: #fff;
    position: relative;
    padding-top: 70px;
    background: linear-gradient(320deg, #030303, #080808);
    position: sticky;
    

    &::after{
        content: "";
        opacity: 0.2;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        background-attachment: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqM8S4HTUaFlvKnZnBfAjHfo99cu_9KuGrySW9w4W5V3FQ4jkTe-m5iFWWsLdKvp5BQYFklCvsFfOHWM2H2jfPN92OenFYHb0UCm_WnmMn4J5h0JCgROGFiim5HES89JJAJcvCEz4ZTW_W/s2560/programming_code_screen_207262_2560x1440.jpg");
        z-index: -2;
    }


`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 790px){
        font-size: 2rem;
    }
`;

export const Grupo = styled.div`
    width: max-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 4rem; 
    margin-bottom: 2rem;

    @media screen and (max-width: 720px){
        grid-template-columns: repeat(2, 1fr);

    }

    @media screen and (max-width: 440px){
        grid-template-columns: repeat(1, 1fr);

    }


`;