import { styled} from "styled-components";

export const Container = styled.div`
  width: 80vw;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  align-items: center;
  color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000ee;
  border: 4px white solid;
  border-radius: 20px;
  z-index: 996;
  overflow-y: auto;
  hyphens: auto;

  @media screen and (max-width: 1000px){
    flex-direction: column;
  }

  @media screen and (max-width: 790px){
    max-height: 100vh;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    border: none;

  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.2rem;
  text-align: left;
  margin-left: 50px;

  @media screen and (max-width: 1000px){
    margin-left: 0px;
  } 

  @media screen and (max-width: 790px){
    font-size: 1.8rem;
  }

  @media screen and (max-width: 600px){
    font-size: 1.5rem;
  }

  @media screen and (max-width: 400px){
    font-size: 1.2rem;
    margin-bottom: 0.6rem;

  }
`;

export const Description = styled.p`
  margin-bottom: 2.5rem;
  font-weight: 300;
  font-size: 1.1rem;
  text-align: justify;
  padding-inline: 50px;

  @media screen and (max-width: 1310px){
    font-size: 0.9rem;
  }

  @media screen and (max-width: 1000px){
    padding-inline: 20px;
  }

  @media screen and (max-width: 500px){
    margin-bottom: 1.4rem;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 400px){
    margin-bottom: 1rem;
    font-size: 0.8rem;

  }
`;

export const link = styled.a`

  background-color: white;
  color: black;
  padding: 10px 50px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  margin-left: 50px;
  width: 250px;


  &:hover{
    background-color: #ffffffbb;
  }


  @media screen and (max-width: 1000px){
    margin-left: 0px;
  } 

  @media screen and (max-width: 400px){
    padding: 5px 10px;
    width: 70vw;
  } 

`;

export const Image = styled.img`
  max-height: 50vh;
  width: 40%;
  margin: 20px;

  @media screen and (max-width: 1000px){
    width: auto;
    max-width: 85%;
    max-height: 30vh;
  } 

  @media screen and (max-width: 500px){
    max-width: 85%;
    max-height: 20vh;
  } 

  @media screen and (max-width: 400px){
    margin-bottom: 0.6rem;

  }
`;

export const Info = styled.div`
 display: flex;
 flex-direction: column;

  @media screen and (max-width: 1000px){
    justify-content: center;
    align-items: center;
  } 

`;


export const Fechar = styled.p`
  font-weight: 600;
  font-size: 2.7rem;
  text-align: right;
  position: absolute;
  top: 0px;
  right: 20px;
  color: red;
  position: absolute;

  &:hover{
    cursor: pointer;
    transition: 0.2s;
    opacity: 0.6;
  }
`;