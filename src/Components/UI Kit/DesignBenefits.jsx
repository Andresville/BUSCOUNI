import styled from "styled-components";
import {lightblue, white, blue} from "../UI Kit/Variables";


export const TitleBenefits = styled.h3`
    margin: 5% auto 2% auto;
    font-weight: 800;
    font-size: 1.3rem;
    text-align: center;
    color: ${blue};
    @media(min-width: 640px){
    font-size: 2rem;
  }
    @media(min-width: 1024px){
    font-size: 2.5rem;
  }
`

export const BenefitsContainer = styled.div`
    width: 80%;
    height: auto;
    margin: 3% auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media(min-width: 640px){

  }
    @media(min-width: 1024px){
    flex-direction: row;
  }
`

export const BenefitsCard = styled.div`
    width: 100%;
    height: auto;
    background-color: ${lightblue};
    border-radius: 2rem;
    box-shadow: 3px 3px rgb(0 0 0 / 0.7);
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    @media(min-width: 640px){

  }
    @media(min-width: 1024px){
    width: 32%;
  }
`

export const BenefitsImg = styled.img`
    width: 10%;
    height: 15%;
    align-content: end;
    padding: 2% 0 2% 80%;
    @media(min-width: 640px){

  }
    @media(min-width: 1024px){
    
  }
`

export const BenefitsCardTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 10%;
    @media(min-width: 640px){

  }
    @media(min-width: 1024px){
    width: 70%;
  }
`

export const BenefitsImgTitle = styled.img`
    width: 5%;
    height: 100%;
    padding: 1.5% 5% 0 0;
    @media(min-width: 640px){

  }
    @media(min-width: 1024px){
    width: 8%;
  }
`

export const BenefitsTitle = styled.h3`
    margin: 0;
    font-size: 1rem;
    @media(min-width: 1024px){
    font-size: 1.2rem;
}
`

export const BenefitsText = styled.p`
    padding: 3% 2% 3% 5%;
    font-size: .8rem;
    margin: 2% 0 5% 0;
    @media(min-width: 1024px){
    margin: 2% 0;
}
`