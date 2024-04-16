import styled from "styled-components";
import { blue } from "../UI Kit/Variables";

export const FooterContainer = styled.header`
background-color: ${blue};
display: flex;
flex-direction: column;
margin: 3% 0 0 0;
padding: 0;
height: auto;
align-items: center;
@media(min-width: 640px){

}

@media(min-width: 768px){ 

}

@media(min-width: 1024px){ 

}
`

export const TitleFooter = styled.h2`
  margin: 0;
  padding: 0 3vw;
  font-size: 1.2rem;
  font-weight: 600;
  @media(min-width: 768px){
    font-size: 1.6rem;
  }

  @media(min-width: 1024px){
    font-size: 2.2rem;
  }
`

export const TextFooter = styled.p`
  margin: 0;
  padding: .3% 0;
  font-size: .6rem;
  font-weight: 600;
  @media(min-width: 1024px){
    font-size: .8rem;
  }
`

export const IconContain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1% 0;
  width: 25%;
  align-items: center;
`

export const Icon = styled.img`
  width: 8%;
  height: 8%;
`