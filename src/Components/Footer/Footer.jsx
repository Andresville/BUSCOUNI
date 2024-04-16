import { FooterContainer, Icon, IconContain, TextFooter, TitleFooter } from "../UI Kit/DesignFooter";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";


export const Footer = () => {
  return (
    <FooterContainer>
        <TitleFooter>Busco UNI</TitleFooter>
        <TextFooter>“Terrazas del Portezuelo” ,Edificio «Proyección al Futuro».</TextFooter>
        <TextFooter>Autopista Serranías Puntanas Km. 785</TextFooter>
        <TextFooter>CP 5700, Ciudad de San Luis.</TextFooter>
        <TextFooter>4452000 – Internos: 3273 // 3274</TextFooter>
        <TextFooter>ministerioeducacion@sanluis.edu.ar</TextFooter>
        <IconContain>
            <Icon src={facebook} alt="" />
            <Icon src={instagram} alt="" />
            <Icon src={linkedin} alt="" />
        </IconContain>
    </FooterContainer>
  )
};

