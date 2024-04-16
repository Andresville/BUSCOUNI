import styled from "styled-components";
import {lightblue, blue, white} from "../UI Kit/Variables";

export const ContainerDegree = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

`

export const ContainerDegreeCard = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 5% auto;
    flex-wrap: wrap;
    @media(min-width: 1024px){
    width: 80%;
    height: 45vh;
    margin: 3% auto;
    flex-wrap: nowrap;
}
`

export const ContainerCard = styled.div`
    width: 45%;
    height: 35vh;
    margin: 2% 0;
    background-color: ${lightblue};
    border-radius: .8rem;
    box-shadow: 3px 3px rgb(0 0 0 / 0.5);
    @media(min-width: 768px){ 
    width: 20%;
    height: auto;
    margin: 0;
}
`

export const ImageCard = styled.img`
    width: 100%;
    height: 50%;
    border-top-left-radius: .8rem ;
    border-top-right-radius: .8rem;
`

export const ContainerText = styled.div`
    padding: 0 5%;
`

export const TitleCard = styled.h3`
    font-size: .8rem;
    font-weight: 600;
    margin: 0 0 5% 0;
    @media(min-width: 1024px){ 
    font-size: 1rem;
}
`

export const ContainerTextCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0 0 5% 0;
`

export const TextCard = styled.p`
    font-size: .5rem;
    padding: 0;
    margin: 0;
    @media(min-width: 1024px){ 
    font-size: .7rem;
}
`

export const ButtonCard = styled.button`
    background-color: ${blue};
    color: ${white};
    width: 60%;
    height: 5vh;
    margin: 0 auto;
    border: none;
    border-radius: 15rem;
    font-size: .8rem;
    font-family: "poppins";
    box-shadow: 2px 2px rgb(0 0 0 / 0.5);
    @media(min-width: 1024px){ 
    width: 30%;
    height: 8vh;
    font-size: 1.2rem;
}
`