import { DetailContainer, DetailContainerName, DetailContainerUniversities, DetailDatesName, LogoUniversities, LogoUniversitiesName, TextContainerUniversities, TextContainerUniversitiesName, TextUniversities, TextUniversitiesName, TextUniversityContainer, TitleUniversities, TitleUniversities1, TitleUniversitiesName } from "../UI Kit/DesignUniversitiesDetailContainer";

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
                            <TitleUniversities1>{name1}</TitleUniversities1>
                            <TextUniversitiesName>Direccion: {direccion}</TextUniversitiesName>
                            <TextUniversitiesName>Telefono: {telefono}</TextUniversitiesName>
                            <TextUniversitiesName>Telefono: {telefono1}</TextUniversitiesName>
                            <TextUniversitiesName>Email: {correo}</TextUniversitiesName>
                            <TextUniversitiesName>Web: {web}</TextUniversitiesName>
                        </DetailContainerUniversities>
                    </DetailDatesName>
                    <TextUniversitiesName>{descripcion}</TextUniversitiesName>
                    <TitleUniversitiesName>Mision:</TitleUniversitiesName>
                    <TextUniversitiesName>{mision}</TextUniversitiesName>
                    <TitleUniversitiesName>Vision:</TitleUniversitiesName>
                    <TextUniversitiesName>{vision}</TextUniversitiesName>
                    <TitleUniversitiesName>Modalidad:</TitleUniversitiesName>
                    <TextUniversitiesName>{modalidades}</TextUniversitiesName>
                    <TitleUniversitiesName>Carreras:</TitleUniversitiesName>
                    <TextContainerUniversitiesName>
                        {carrerasArray.map((carrera, index) => (
                            <TextUniversityContainer key={index}>
                                <TextUniversitiesName>{carrera.nombre}</TextUniversitiesName>
                            </TextUniversityContainer>
                        ))}
                    </TextContainerUniversitiesName>
                    <TitleUniversitiesName>Tipo de Universidad:</TitleUniversitiesName>
                    <TextUniversitiesName>{type}</TextUniversitiesName>
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