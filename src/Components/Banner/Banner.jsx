import { BannerContainer, TextTitleBanner, TextBanner, LogoBanner, TitleTextContainer } from "../UI Kit/DesignBanner"
import CienciaEInnovacionSanLuis from "../../assets/CienciaEInnovacionSanLuis.svg"

export const Banner = () => {
  return (
    <BannerContainer>
        <TitleTextContainer>
        <TextTitleBanner>Encontra la carrera <span style={{textDecoration: 'underline'}}>perfecta</span> para vos!</TextTitleBanner>
        <TextBanner>En Busco UNI nos obsesionamos con que estudies lo que realmente queres. Por eso, tenemos la oferta educativa mas actualizada de todo San Luis.</TextBanner>
        </TitleTextContainer>
        
        <LogoBanner src={CienciaEInnovacionSanLuis} alt="logo" />
    </BannerContainer>
  )
}