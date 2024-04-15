import { DetailContainer, DetailContainerUniversities, LogoUniversities, TextContainerUniversities, TextUniversities, TextUniversityContainer, TitleUniversities } from "../UI Kit/DesignUniversitiesDetailContainer";

export const UniversitiesDetailContainer = ({ urlUniversity, name1, carreras, type }) => {
    const carrerasArray = Object.keys(carreras).map(key => ({
        nombre: key,
        ...carreras[key]
    }));

    return (
        <>
            <DetailContainer>
                <LogoUniversities src={urlUniversity} alt="" />
                <DetailContainerUniversities>
                    <TitleUniversities>{name1}</TitleUniversities>
                    <TextContainerUniversities>
                        <TextUniversities>Carreras:</TextUniversities>
                        {carrerasArray.map((carrera, index) => (
                            <TextUniversityContainer key={index}>
                                <TextUniversities>{carrera.nombre}</TextUniversities>
                            </TextUniversityContainer>
                        ))}
                    </TextContainerUniversities>
                    <TextUniversities>Tipo de Universidad: {type}</TextUniversities>
                </DetailContainerUniversities>
            </DetailContainer>
        </>
    )
};