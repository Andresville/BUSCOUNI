import styled from "styled-components";
import { blue } from "../UI Kit/Variables"

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    background-color: ${blue};
    margin-top: 5%;
    padding: 0%;
`

export const SidebarTitle = styled.h2`
    text-align: center;
    margin: 0%;
    padding-top: 5%;
`

export const DropdownFilters = styled.ul`
    display: flex;
    flex-direction: column;
`

export const DropdownList = styled.li`
    list-style: none;
    align-items: center;
`

export const Down = styled.img`
    width: 20%;
    height: 20%;
`