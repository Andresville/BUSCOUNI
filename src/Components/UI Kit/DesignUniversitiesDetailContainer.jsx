import styled from "styled-components";
import { blue } from "../UI Kit/Variables"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 768px){
    flex-direction: row;
  }
`

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2% 0 0 0;
    @media(min-width: 1024px){
    width: 70%;
    margin: 0.5% auto 0 8%;
  }
`

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    height: auto;
    background-color: white;
    border-radius: 10px;
    margin: 2% auto 0 auto;
    @media(min-width: 1024px){
    margin: 1% 0;
  }
`

export const LogoUniversities = styled.img`
    width: 15%;
    height: auto;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const LogoUniversity = styled.img`
    width: 20%;
    height: auto;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-right: 5%;
`

export const DetailContainerUniversities = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: auto;
    margin: 0;
    padding: 0;
`
export const TitleUniversities = styled.h3`
    color: ${blue};
    margin: 0;
    padding: 2% 0 1% 0;
    font-size: .8rem;
    @media(min-width: 1024px){
    font-size: 1.2rem;
  }
`

export const TextContainerUniversities = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
`

export const TextContainerUniversity = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`

export const TextUniversityContainer = styled.div`
    margin: 0;
    padding: 1% 2% 0 0;
    @media(min-width: 640px){
      font-size: .8rem;
      padding: 0 2% 0 0;
}
`

export const TextUniversities = styled.p`
    color: ${blue};
    margin: 0;
    padding: 1% 2% 1% 0;
    font-size: .6rem;
    @media(min-width: 640px){
      font-size: .8rem;
      padding: 0 2% 0 0;
  }

    @media(min-width: 1024px){
      font-size: 1rem;
  }
`

export const TextUniversity = styled.p`
    color: ${blue};
    margin: 0;
    padding: 0 2% .5% 0;
    font-size: .6rem;
`
//DISEÑO PAGINA DETALLE UNIVERSIDAD 

export const DetailContainerName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: auto;
    background-color: white;
    border-radius: 10px;
    margin: 2% auto 0 auto;
    padding: 1% 0 2% 1%;
    @media(min-width: 1024px){
    margin: 0;
  }
`

export const LogoUniversitiesName = styled.img`
    width: 30%;
    height: auto;
    padding: 0;
`

export const DetailDatesName  = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    background-color: white;
    margin: 1% 0;
    @media(min-width: 1024px){
    
  }
  `

export const TitleUniversitiesName = styled.h3`
color: ${blue};
margin: 0;
padding: 1% 0;
font-size: .6rem;
@media(min-width: 1024px){
font-size: 1rem;
}
`