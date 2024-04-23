import styled from "styled-components";
import {blue} from "../UI Kit/Variables";

export const TitleDegree = styled.h3`
    margin: 3% auto;
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

export const SearchDegree = styled.div`
    height: 8vh;
    width: 80%;
    background-color: ${blue};
    margin: 2% auto;
    border-radius: 1rem;
    @media(min-width: 1024px){
    width: 60%;
    height: 13vh;
  }
`

export const NavDegree = styled.nav`
    width: 100%;
    height: 8vh;
    background-color: ${blue};
    margin: 2% auto;
    border-radius: .6rem;
    @media(min-width: 1024px){
    height: 13vh;
    border-radius: 1rem;
  }
`

export const NavDegreeUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 8vh;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  align-items: center;
  overflow: hidden;
  @media(min-width: 1024px){
    height: 13vh;
  }
`

export const NavDegreeLi = styled.li`
  display: flex;
  justify-content: space-around;
  background: ${(props) => props.t};
  background: ${(props) => props.f};
  width: auto;
  height: auto;
  padding: 1%;
  border-radius: .4rem;
  flex-direction: row;
  list-style-type: none;
  overflow: hidden;
  font-weight: 400;
  font-size: .8rem;
  color: ${(props) => props.ct};
  color: ${(props) => props.cf};
  @media(min-width: 1024px){
    border-radius: .8rem;
    font-size: 1rem;
  }
`