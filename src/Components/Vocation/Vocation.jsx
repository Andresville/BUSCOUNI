import { ButtonTest, VocationBanner, VocationContainer, VocationExplain, VocationTextBanner, VocationTextExplain, VocationTitleBanner, VocationTitleExplain } from "../UI Kit/DesignVocation";


export const Vocation = () => {
    return (
        <>
            <VocationBanner>
                <VocationContainer>
                    <VocationTitleBanner>Test Vocacional</VocationTitleBanner>
                    <VocationTextBanner>Descubrí cómo saber qué carrera estudiar con un test de orientación vocacional que te permitirá explorar tu verdadera vocación</VocationTextBanner>
                    <ButtonTest href="https://www.hacertest.com/personalidad/vocacional/" target="_blank">Completá el test</ButtonTest>
                </VocationContainer>
            </VocationBanner>
            <VocationExplain>
                <VocationTitleExplain>¿Qué es un Test Vocacional y para qué sirve?</VocationTitleExplain>
                <VocationTextExplain> Seguramente te hiciste preguntas como “¿Qué estudiar?” o “¿Qué carrera seguir?” y aun no sabes las respuestas. En Busco UNI, hemos creado una herramienta única: nuestro test de orientación vocacional. Este test no solo te ayuda a descubrir tus habilidades y destrezas, sino que también te conecta con tu verdadera vocación. ¿Cómo lo hace? Mediante una cuidadosa selección de preguntas que exploran tu personalidad, tus preferencias de áreas de estudio y tus aspiraciones profesionales.</VocationTextExplain>
                <VocationTextExplain>¡Animate a descubrir un mundo de profesiones con nuestro Test Vocacional online y gratuito en un click!
                </VocationTextExplain>
            </VocationExplain>
        </>
    )
};

