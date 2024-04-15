import styled from "styled-components";
import {blue, lightblue, white} from "../UI Kit/Variables"

export const SearchContainer = styled.div`
    width: 95%;
    height: 23vh;
    background-color: ${lightblue};
    margin: -8vh auto 0 auto;
    border-radius: 1rem;
`

export const TextSearch = styled.h3`
    margin: 0;
    padding: 2% 2% 1.5% 5%;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.2;
`
export const InputSearchContainer = styled.div`
    margin: 0;
    padding: 0 5% 0 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const InputSearch = styled.input`
    margin: 0;
    width: 35%;
    height: 6vh;
    border-radius: .3rem;
    border: none;
    background: ${white};
    padding: 0 0 0 1%;
    font-family: "poppins";
    font-weight: 300;
    font-size: .8rem;
    color: ${blue};
`
export const ButtonSearch = styled.button`
    margin: 0;
    width: 20%;
    height: 6vh;
    border-radius: .5rem;
    border: none;
    background: ${blue};
    padding: 0 0 0 1%;
    font-family: "poppins";
    font-weight: 600;
    font-size: 1rem;
    color: ${white};
    cursor: pointer;
`