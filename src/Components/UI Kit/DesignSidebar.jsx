import styled from "styled-components";
import { blue } from "../UI Kit/Variables"

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${blue};
    margin-top: 1%;
    padding: 0%;
    flex-wrap: wrap;
    box-sizing: border-box;
    @media(min-width: 768px){
    width: 20%;
    margin-top: 5%;
  }
`

export const SidebarTitle = styled.h2`
    text-align: center;
    margin: 0%;
    padding-top: 2%;
    font-size: 1rem;
    @media(min-width: 768px){
    padding-top: 5%;
  }
`

export const DropdownFilters = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0 2%;
    padding: 0;
    @media(min-width: 768px){
    flex-direction: column;
    margin: 10% 20%;
  }
`

export const DropdownList = styled.li`
    list-style: none;
    align-items: center;
    font-size: .5rem;
    width: auto;
    @media(min-width: 1024px){
    font-size: 1rem;
  }
`

export const Down = styled.img`
    width: 20%;
    height: 20%;
    @media(min-width: 425px){
    
  }
`

export const SearchSidebar = styled.input`
    width: 5rem;
    height: 1rem;
    margin: 0;
    font-size: .5rem;
    @media(min-width: 1024px){
    width: 10rem;
    height: 1.5rem;
    font-size: .8rem;
  }
`