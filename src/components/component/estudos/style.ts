import { styled  } from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  padding-top: 70px;
  hyphens: auto;

`;

export const Title = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    margin-top:1rem;

    @media screen and (max-width: 790px){
        font-size: 2rem;
    }

    @media screen and (max-width: 600px){
      font-size: 1.5rem;
    }
`;

export const text = styled.p`
    font-size: 20px;
    margin: 20px;
    max-width: 1200px;
    text-align: justify;


    @media screen and (max-width: 600px){
      font-size: 0.9rem;
      
    }
`;