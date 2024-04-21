import { DetailContainer, DetailContainerName, DetailContainerUniversities, DetailDatesName, LogoUniversities, LogoUniversitiesName, TextContainerUniversities, TextUniversities, TextUniversityContainer, TitleUniversities, TitleUniversitiesName } from "../UI Kit/DesignUniversitiesDetailContainer";

export const UniversitiesDetailContainer = ({ urlUniversity, name1, carreras, type, correo, descripcion, direccion, mision, modalidades, telefono, telefono1, vision, web, showFullDetail }) => {
    const carrerasArray = Object.keys(carreras).map(key => ({
        nombre: key,
        ...carreras[key]
    }));

    if (!showFullDetail) {
        return (
            <>
                <TitleUniversities>{name1}</TitleUniversities>
                <DetailContainerName>
                    <DetailDatesName>
                        <LogoUniversitiesName src={urlUniversity} alt="" />
                        <DetailContainerUniversities>
                            <TitleUniversities>{name1}</TitleUniversities>
                            <TextUniversities>Direccion: {direccion}</TextUniversities>
                            <TextUniversities>Telefono: {telefono}</TextUniversities>
                            <TextUniversities>Telefono: {telefono1}</TextUniversities>
                            <TextUniversities>Email: {correo}</TextUniversities>
                            <TextUniversities>Web: {web}</TextUniversities>
                        </DetailContainerUniversities>
                    </DetailDatesName>
                    <TextUniversities>{descripcion}</TextUniversities>
                    <TitleUniversitiesName>Mision:</TitleUniversitiesName>
                    <TextUniversities>{mision}</TextUniversities>
                    <TitleUniversitiesName>Vision:</TitleUniversitiesName>
                    <TextUniversities>{vision}</TextUniversities>
                    <TitleUniversitiesName>Modalidad:</TitleUniversitiesName>
                    <TextUniversities>{modalidades}</TextUniversities>
                    <TitleUniversitiesName>Carreras:</TitleUniversitiesName>
                    <TextContainerUniversities>
                        {carrerasArray.map((carrera, index) => (
                            <TextUniversityContainer key={index}>
                                <TextUniversities>{carrera.nombre}</TextUniversities>
                            </TextUniversityContainer>
                        ))}
                    </TextContainerUniversities>
                    <TitleUniversitiesName>Tipo de Universidad:</TitleUniversitiesName>
                    <TextUniversities>{type}</TextUniversities>
                </DetailContainerName>
            </>
        )
    }


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
    );
};