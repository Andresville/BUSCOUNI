import styled from "styled-components";
import { blue, white } from "../UI Kit/Variables";

export const StyledBrand = styled.header`
background-color: ${blue};
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 0;
padding: 1% 2.5vw;
height: 10vh;
align-items: center;
@media(min-width: 640px){
flex-wrap: nowrap;
height: 7vh;
}

@media(min-width: 768px){ 
padding: 0 3vw;
height: 10vh;
}

@media(min-width: 1024px){ 
padding: 0 5vw;
height: 15vh;
}
`

export const LogoBrand = styled.img`
  height: 2rem;
  width: 2rem;
  @media(min-width: 768px){
  height: 3rem;
  width: 3rem;
  }

  @media(min-width: 1024px){
  height: 4rem;
  width: 4rem;
  }

  @media(min-width: 1280px){
  height: 4.5rem;
  width: 4.5rem;
  }
`

export const TitleBrand = styled.h1`
  margin: 0;
  padding: 0 3vw;
  font-size: 1.2rem;
  font-weight: 600;
  @media(min-width: 640px){
  padding: 0 1.5vw;
  }

  @media(min-width: 768px){
    font-size: 1.6rem;
  }

  @media(min-width: 1024px){
    font-size: 2.2rem;
  }

  @media(min-width: 1280px){
    font-size: 3rem;
  }
`
export const NavBarUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 4vh;
  flex-direction: row;
  list-style-type: none; 
  margin: 0;
  padding-left: .5vw;
  overflow: hidden;
  @media(min-width: 640px){
    height: 5vh;
    width: 70%;
    padding: 0 1vw;
  }

  @media(min-width: 768px){
    width: 65%;
    padding: 0 2.5 vw;
  }

  @media(min-width: 1024px){
    width: 55%;
    padding-left: 10vw;
  }
`

export const NavBarLi = styled.li`
  display: flex;
  justify-content: space-around;
  width: auto;
  height: 3vh;
  flex-direction: row;
  list-style-type: none; 
  margin: 0;
  padding-top: .1rem;
  overflow: hidden;
  font-weight: 400;
  font-size: 1rem;
  @media(min-width: 768px){
    height: 5vh;
    padding-top: .3rem;
  }

  @media(min-width: 1024px){
    height: 5vh;
    padding-top: .3rem;
  }
`

export const NavBarP = styled.p`
  display: inline;
  background-color: ${blue};
  height: 2vh;
  color: ${white};
  font-size: .5rem;
  text-align: center;
  margin: 1% 0 0 0;
  padding: .5vh;
  text-decoration: none;
  @media(min-width: 400px){
  padding: 2vh;
  }

  @media(min-width: 768px){
  height: 5vh;
  margin: 0;
  padding: 2vh;
  font-size: .8rem;
  }

  @media(min-width: 1024px){
  height: 5vh;
  margin: 0;
  padding: 1.5vh;
  font-size: .8rem;
  }

  @media(min-width: 1280px){
  height: 5vh;
  margin: 0;
  padding: 2vh;
  font-size: 1rem;
  }
`