import styled from "styled-components";
import {blue, white} from "../UI Kit/Variables";

export const TitleDegree = styled.h3`
    margin: 3% auto;
    font-weight: 800;
    font-size: 2.5rem;
    text-align: center;
    color: ${blue};
`

export const SearchDegree = styled.div`
    width: 60%;
    height: 13vh;
    background-color: ${blue};
    margin: 2% auto;
    border-radius: 1rem;
`

export const NavDegree = styled.nav`
    width: 100%;
    height: 13vh;
    background-color: ${blue};
    margin: 2% auto;
    border-radius: 1rem;
`

export const NavDegreeUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 13vh;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  align-items: center;
  overflow: hidden;
  @media(max-width: 425px){
    height: 4vh;
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
  border-radius: .8rem;
  flex-direction: row;
  list-style-type: none;
  overflow: hidden;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.ct};
  color: ${(props) => props.cf};
  @media(max-width: 425px){
    height: 4vh;
    padding-top: .1rem;
  }
`