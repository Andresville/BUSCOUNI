import styled from "styled-components";
import FotoBanner from "../../assets/FotoBanner.jpg"

export const BannerContainer = styled.div`
    width: 100%;
    height: 60vh;
    background-image: url(${FotoBanner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const TitleTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 42%;
    padding-top: 3%;
`

export const TextTitleBanner = styled.h3`
    margin: 0;
    padding: 0 0 5% 8%;
    display: block;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 1.2;
`

export const TextBanner = styled.h3`
    margin: 0;
    padding-left: 8%;
    display: block;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.2;
`

export const LogoBanner = styled.img`
    width: 40%;
    height: 60%;
    padding-top: 3%;
`