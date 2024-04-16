import { ButtonCard, ContainerCard, ContainerDegree, ContainerDegreeCard, ContainerText, ContainerTextCard, ImageCard, TextCard, TitleCard } from "../UI Kit/DesignDegreeCard";
import web from "../../assets/web.jpg";
import js from "../../assets/js.jpeg";
import programacion from "../../assets/programacion.jpg";
import software from "../../assets/software.jpg";

export const DegreeCard = () => {
    return (
        <ContainerDegree>
        <ContainerDegreeCard>
        <ContainerCard>
            <ImageCard src={web} alt="Curso de Desarrollo Web -UNSL-" />
            <ContainerText>
                <TitleCard >Curso Desarrollo Web -UNSL-</TitleCard>
                <ContainerTextCard >
                        <TextCard >2 Materias</TextCard>
                        <TextCard >8 Semanas</TextCard>
                </ContainerTextCard>
                <ContainerTextCard >
                        <TextCard >A partir de: $59</TextCard>
                        <TextCard >4.8</TextCard>
                </ContainerTextCard>
            </ContainerText>
        </ContainerCard>
        <ContainerCard>
            <ImageCard src={js} alt="Curso de Desarrollo Web -UNSL-" />
            <ContainerText>
                <TitleCard >Curso de JavaScript -UNSL-</TitleCard>
                <ContainerTextCard >
                        <TextCard >4 Materias</TextCard>
                        <TextCard >16 Semanas</TextCard>
                </ContainerTextCard>
                <ContainerTextCard >
                        <TextCard >A partir de: $89</TextCard>
                        <TextCard >4.8</TextCard>
                </ContainerTextCard>
            </ContainerText>
        </ContainerCard>
        <ContainerCard>
            <ImageCard src={programacion} alt="Curso de Desarrollo Web -UNSL-" />
            <ContainerText>
                <TitleCard >Tec. en Programación -UNSL-</TitleCard>
                <ContainerTextCard >
                        <TextCard >20 Materias</TextCard>
                        <TextCard >100 Semanas</TextCard>
                </ContainerTextCard>
                <ContainerTextCard >
                        <TextCard >A partir de: $259</TextCard>
                        <TextCard >4.6</TextCard>
                </ContainerTextCard>
            </ContainerText>
        </ContainerCard>
        <ContainerCard>
            <ImageCard src={software} alt="Curso de Desarrollo Web -UNSL-" />
            <ContainerText>
                <TitleCard >Tec. en Desarrollo de Software -UNSL-</TitleCard>
                <ContainerTextCard >
                        <TextCard >34 Materias</TextCard>
                        <TextCard >150 Semanas</TextCard>
                </ContainerTextCard>
                <ContainerTextCard >
                        <TextCard >A partir de: $359</TextCard>
                        <TextCard >5.0</TextCard>
                </ContainerTextCard>
            </ContainerText>
        </ContainerCard>
        </ContainerDegreeCard>
        <ButtonCard>Ver todas las carreras</ButtonCard>
        </ContainerDegree>
    )
};
