import styled from "styled-components";
import { blue } from "../UI Kit/Variables"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 5% 0 0 15%;
`

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    height: auto;
    background-color: white;
    border-radius: 10px;
    margin: 1% 0;
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
    padding: 0 2% 0 0;
`

export const TextUniversities = styled.p`
    color: ${blue};
    margin: 0;
    padding: 0 2% 0 0;
`

export const TextUniversity = styled.p`
    color: ${blue};
    margin: 0;
    padding: 0 2% .5% 0;
    font-size: .6rem;
`