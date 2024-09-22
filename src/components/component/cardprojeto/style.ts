import { styled } from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    &.searchmap{
        grid-column: 4 / span 3;
        grid-row: 1 / span 6;

        @media screen and (max-width: 768px){
            grid-column: 8 / span 4;
            grid-row: 1 / span 4;
        }

        @media screen and (max-width: 425px){
            grid-column: 1 / span 10;
            grid-row: 1 / span 3;
        }
    }

    &.searchmusic{
        grid-column: 7 / span 3;
        grid-row: 1 / span 6;
        
        @media screen and (max-width: 768px){
            grid-column: 8 / span 4;
            grid-row: 5 / span 4;
        }

        @media screen and (max-width: 425px){
            grid-column: 1 / span 10;
            grid-row: 4 / span 3;
        }
    }

    &.serra{
        grid-column: 1 / span 3;
        grid-row: 1 / span 3;

        @media screen and (max-width: 768px){
            grid-column: 1 / span 7;
            grid-row: 1 / span 3;
        }

        @media screen and (max-width: 425px){
            grid-column: 1 / span 10;
            grid-row: 7 / span 3;
        }
    }

    &.m3{
        grid-column: 1 / span 3;
        grid-row: 4 / span 3;

        @media screen and (max-width: 768px){
            grid-column: 1 / span 7;
            grid-row: 4 / span 3;
        }

        @media screen and (max-width: 425px){
            grid-column: 1 / span 10;
            grid-row: 10 / span 3;
        }
    }


    &.prownovar{
        grid-column: 4 / span 3;
        grid-row: 7 / span 3;
    
        @media screen and (max-width: 768px){
            grid-column: 1 / span 7;
            grid-row: 7 / span 3;
        }

        @media screen and (max-width: 425px){
            grid-column: 1 / span 10;
            grid-row: 13 / span 3;
        }
    }

    &.nanofab{
        grid-column: 7 / span 3;
        grid-row: 7 / span 3;
    
        @media screen and (max-width: 768px){
            grid-column: 1 / span 7;
            grid-row: 10 / span 3;
        }

        @media screen and (max-width: 425px){
            grid-column: 1 / span 10;
            grid-row: 16 / span 3;
        }
    }

    &.ppgctm{
        grid-column: 1 / span 3;
        grid-row: 7 / span 3;
    
        @media screen and (max-width: 768px){
            grid-column: 8 / span 4;
            grid-row: 9 / span 4;
        }

        @media screen and (max-width: 425px){
            grid-column: 1 / span 10;
            grid-row: 19 / span 3;
        }
    }


`;



export const Image = styled.img`

    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover{
        transition: 0.2s;
        -webkit-box-shadow:0px 0px 5px 0px #fff;
        -moz-box-shadow: 0px 0px 5px 2px #fff;
        box-shadow: 0px 0px 0px 4px #fff;
        cursor: pointer;
    }
`;


