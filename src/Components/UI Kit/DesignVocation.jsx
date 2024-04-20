import styled from "styled-components";
import FotoTest from "../../assets/FotoTest.jpg";
import {blue, white} from "../UI Kit/Variables";

export const VocationBanner = styled.div`
    width: 100%;
    height: 50vh;
    background-image: url(${FotoTest});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 20%;
    opacity: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(min-width: 1024px){
    height: 80vh;
}
`

export const VocationContainer = styled.div`
    width: 80%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(min-width: 1024px){
    width: 50%;
    height: 80vh;
}
`

export const VocationTitleBanner = styled.h2`
    font-size: 2.2rem;
    font-weight: 600;
    margin: 0;
  `

export const VocationTextBanner = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
`

export const ButtonTest = styled.a`
    background-color: ${blue};
    color: ${white};
    width: 70%;
    margin: 4% auto;
    border: none;
    border-radius: 10px;
    text-align: center;
    padding: 3% 0;
    font-size: 1rem;
    font-family: "poppins";
    text-decoration: none;
    box-shadow: 2px 2px rgb(0 0 0 / 0.5);
    @media(min-width: 1024px){ 
    width: 40%;
    border-radius: 20px;
}
`
export const VocationExplain = styled.div`
    width: 90%;
    height: auto;
    background-color: ${white};
    color: ${blue};
    border-radius: 20px;
    margin: 2% auto;
    padding: 0 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const VocationTitleExplain = styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    padding: 1% 0;
    text-align: center;
    @media(min-width: 1024px){ 
    font-size: 1.8rem;
}
`

export const VocationTextExplain = styled.p`
    font-size: .8rem;
    font-weight: 400;
    margin: 0;
    padding: 1%;
    text-align: center;
    @media(min-width: 1024px){ 
    font-size: 1rem;
}
`