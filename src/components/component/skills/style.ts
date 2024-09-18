import { styled, keyframes} from "styled-components";


const moveCards = keyframes`
  0% {
    transform: translateX(4%);
  }
  50%{
    transform: translateX(-92%);
  }
  100% {
    transform: translateX(4%);
  }
`;

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
    margin-bottom: 0.5rem;

    @media screen and (max-width: 790px){
        font-size: 2rem;
    }
`;
export const Description = styled.h2`
    margin-bottom: 2.5rem;
    font-weight: 300;
    font-size: 1.2rem;
    
`;

export const Grupo = styled.div`
    width: 99vw;
    margin-bottom: 2rem;
    overflow: hidden;
`;

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 3.5vw;
    animation: ${moveCards} 60s infinite;
`;