import { BenefitsCard, BenefitsCardTitle, BenefitsContainer, BenefitsImg, BenefitsImgTitle, BenefitsText, BenefitsTitle, TitleBenefits } from "../UI Kit/DesignBenefits";
import Estrellas from "../../assets/Estrellas.svg";
import Lupa from "../../assets/Lupa.svg";
import Filtro from "../../assets/Filtro.svg";
import Test from "../../assets/Tets.svg";



export const Benefits = () => {
    return (
        <>
            <TitleBenefits>Beneficios de Busco UNI</TitleBenefits>
            <BenefitsContainer>
                <BenefitsCard>
                    <BenefitsImg src={Estrellas} alt="" />
                    <BenefitsCardTitle>
                        <BenefitsImgTitle src={Lupa} alt="" />
                        <BenefitsTitle>Explora Instituciones</BenefitsTitle>
                    </BenefitsCardTitle>
                    <BenefitsText>Encontrá la opción perfecta para vos, por duración o modalidad.</BenefitsText>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsImg src={Estrellas} alt="" />
                    <BenefitsCardTitle>
                        <BenefitsImgTitle src={Filtro} alt="" />
                        <BenefitsTitle>Usa Filtros</BenefitsTitle>
                    </BenefitsCardTitle>
                    <BenefitsText>Te otorgamos varias opciones de filtro para estudiar lo que en verdad querés.</BenefitsText>
                </BenefitsCard>
                <BenefitsCard>
                    <BenefitsImg src={Estrellas} alt="" />
                    <BenefitsCardTitle>
                        <BenefitsImgTitle src={Test} alt="" />
                        <BenefitsTitle>Test Vocacional</BenefitsTitle>
                    </BenefitsCardTitle>
                    <BenefitsText>Descubrí cómo saber qué carrera estudiar con un test que te permitirá explorar tu verdadera vocación.</BenefitsText>
                </BenefitsCard>
            </BenefitsContainer>
        </>
    )
};

