import styled from "styled-components";
import FotoBanner from "../../assets/FotoBanner.jpg"

export const BannerContainer = styled.div`
    width: 100%;
    height: 35vh;
    background-image: url(${FotoBanner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media(min-width: 640px){
    height: 40vh;
    background-position: 0%;
  }

  @media(min-width: 768px){
    height: 45vh;
  }

    @media(min-width: 1024px){
    height: 55vh;
    background-position: 0%;
  }
`
export const TitleTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-top: 3%;
    @media(min-width: 768px){
    width: 42%;
  }
`

export const TextTitleBanner = styled.h3`
    margin: 0;
    padding: 0 0 5% 8%;
    display: block;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.2;
    @media(min-width: 640px){
    font-size: 2rem;
  }

    @media(min-width: 1024px){
    font-size: 2.5rem;
  }
`

export const TextBanner = styled.h3`
    margin: 0;
    padding-left: 8%;
    display: block;
    font-weight: 400;
    font-size: .6rem;
    line-height: 1.2;
    @media(min-width: 640px){
    font-size: .8rem;
  }

    @media(min-width: 1024px){
    font-size: 1.2rem;
  }
`

export const LogoBanner = styled.img`
    width: 40%;
    height: 60%;
    padding-top: 3%;
`