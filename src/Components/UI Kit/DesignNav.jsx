import styled from "styled-components";
import { blue, white} from "../UI Kit/Variables";

export const StyledBrand = styled.header`
background-color: ${blue};
display: flex;
flex-direction: row;
margin: 0;
padding: 0 5vw;
height: 15vh;
align-items: center;
@media(max-width: 425px){
    height: 5vh;
  }
`

export const LogoBrand = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  @media(max-width: 425px){
    height: 2rem;
    width: 2rem;
  }
`

export const TitleBrand = styled.h1`
  padding: 0 3vw;
  font-size: 3rem;
  font-weight: 600;
  @media(max-width: 425px){
    font-size: 1.7rem;
  }
`
export const NavBarUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 55%;
  height: 5vh;
  flex-direction: row;
  list-style-type: none; 
  margin: 0;
  padding-left: 10vw;
  overflow: hidden;
  @media(max-width: 425px){
    height: 4vh;
  }
`

export const NavBarLi = styled.li`
  display: flex;
  justify-content: space-around;
  width: auto;
  height: 5vh;
  flex-direction: row;
  list-style-type: none; 
  padding-top: .3rem;
  overflow: hidden;
  font-weight: 400;
  font-size: 1rem;
  @media(max-width: 425px){
    height: 4vh;
    padding-top: .1rem;
  }
`

export const NavBarP = styled.p`
  display: inline;
  background-color: ${blue};
  color: ${white};
  text-align: center;
  padding: 2vh;
  text-decoration: none;
  height: 5vh;
  @media(max-width: 425px){
    font-size: .5rem;
  }
`