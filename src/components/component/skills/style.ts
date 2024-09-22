import { styled  } from "styled-components";
    

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
        -moz-background-position: center;
        -webkit-background-position: center;
        position: absolute;
        background-attachment: fixed;
        -moz-background-attachment: fixed;
        -webkit-background-attachment: fixed;
        top: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqM8S4HTUaFlvKnZnBfAjHfo99cu_9KuGrySW9w4W5V3FQ4jkTe-m5iFWWsLdKvp5BQYFklCvsFfOHWM2H2jfPN92OenFYHb0UCm_WnmMn4J5h0JCgROGFiim5HES89JJAJcvCEz4ZTW_W/s2560/programming_code_screen_207262_2560x1440.jpg");
        background-size: cover;
        z-index: -2;
    }


`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 790px){
        font-size: 2rem;
    }

    @media screen and (max-width: 600px){
      font-size: 1.5rem;
    }
`;
export const Description = styled.h2`
    margin-bottom: 2.5rem;
    font-weight: 300;
    font-size: 1.2rem;
    text-align: center;

    @media screen and (max-width: 600px){
      font-size: 0.9rem;
    }
`;

export const Grupo = styled.div`
    width: 99.7vw;
    margin-bottom: 2rem;
    overflow: hidden;
`;

export const CardContainer = styled.div`
    display: flex;
    padding: 0px 50px;
    gap: 70px;
    animation: moveCards 120s linear infinite ;

    @keyframes moveCards {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-100%);
      }
      100%{
        transform: translateX(0);
      }
    }

    @media screen and (max-width: 2560px){
      width: 60vw;
    }

    @media screen and (max-width: 1980px){
      width: 115vw;
    }

    @media screen and (max-width: 1440px){
      width: 185vw;
    }

    @media screen and (max-width: 1366px){
      width: 200vw;
    }

    @media screen and (max-width: 1024px){
      width: 220vw;
      gap: 50px;
    }
    
    @media screen and (max-width: 768px){
      width: 275vw;
      gap: 30px;
    }

    @media screen and (max-width: 425px){
      width: 470vw;
    }

    @media screen and (max-width: 375px){
      width: 550vw;
    }

    @media screen and (max-width: 320px){
      width: 660vw;
    }
`;