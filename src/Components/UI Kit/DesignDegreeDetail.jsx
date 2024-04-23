import styled from "styled-components";
import {blue, white, black} from "../UI Kit/Variables";

export const DegreeDetailContainer = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    margin: 2% auto;

`

export const DegreeDetailTitle = styled.h3`
    margin: 0 auto;
    padding: 1% 0;
    font-weight: 800;
    font-size: 1rem;
    text-align: center;
    color: ${blue};
    @media(min-width: 640px){
    
  }

    @media(min-width: 1024px){
    font-size: 2rem;
  }
`

export const DegreeDetailTitleOther = styled.h3`
    margin: 0;
    padding-bottom: 1%;
    font-weight: 600;
    font-size: .7rem;
    color: ${blue};
    @media(min-width: 640px){
    
  }

    @media(min-width: 1024px){
    font-size: 1rem;
    padding-bottom: .5%;
  }
`
export const DegreeDetailTitleOther2 = styled.h3`
    margin: 0;
    padding: 1% 0;
    font-weight: 600;
    font-size: .7rem;
    color: ${blue};
    text-align: center;
    @media(min-width: 640px){
    
  }

    @media(min-width: 1024px){
    font-size: 1rem;
    padding-bottom: .5%;
  }
`

export const DegreeDetailText = styled.p`
    margin: 0;
    padding-bottom: 1%;
    font-size: .6rem;
    color: ${black};
    @media(min-width: 640px){
    
  }

    @media(min-width: 1024px){
    font-size: .8rem;
    padding-bottom: .5%;
  }
`

export const DegreeDetailYearContainer = styled.div`
    width: 100%;
    height: auto;
    background-color: ${white};
    margin: 1% 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: .5rem;
    box-shadow: 3px 3px rgb(0 0 0 / 0.5);
    @media(min-width: 640px){
    
  }

    @media(min-width: 1024px){
    margin: .5% 0;
  }
`

export const DegreeDetailYearContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(min-width: 640px){
    
  }

    @media(min-width: 1024px){
    margin: .5% 0;
  }
`

export const DegreeDetailTitle2 = styled.h3`
    margin: 0;
    padding: 1% 0;
    font-weight: 800;
    font-size: 1rem;
    color: ${blue};
    @media(min-width: 640px){
    
  }

    @media(min-width: 1024px){
    font-size: 2rem;
  }
`

export const DegreeDetailText2 = styled.p`
    margin: 0;
    width: 30%;
    padding: 0 0 1% 0;
    font-size: .5rem;
    color: ${black};
    @media(min-width: 640px){
    
  }

    @media(min-width: 1024px){
    font-size: .8rem;
    width: 23%;
    padding: 0 0 .5% 3%;
  }
`