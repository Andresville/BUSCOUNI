import { DetailContainer, DetailContainerName, DetailContainerUniversities, LogoUniversities, LogoUniversitiesName, TextContainerUniversities, TextUniversities, TextUniversityContainer, TitleUniversities } from "../UI Kit/DesignUniversitiesDetailContainer";

export const UniversitiesDetailContainer = ({ urlUniversity, name1, carreras, type, correo, descripcion, direccion, mision, modalidades, telefono, telefono1, vision, web, showFullDetail }) => {
    const carrerasArray = Object.keys(carreras).map(key => ({
        nombre: key,
        ...carreras[key]
    }));

    if (!showFullDetail) {
        return (
            <>
                <DetailContainerName>
                    <LogoUniversitiesName src={urlUniversity} alt="" />
                    <DetailContainerUniversities>
                        <TitleUniversities>{name1}</TitleUniversities>
                        <TextUniversities>Direccion: {direccion}</TextUniversities>
                        <TextUniversities>Telefono: {telefono}</TextUniversities>
                        <TextUniversities>telefono: {telefono1}</TextUniversities>
                        <TextUniversities>Email: {correo}</TextUniversities>
                        <TextUniversities>Web: {web}</TextUniversities>
                        <TextUniversities>Email: {correo}</TextUniversities>
                        <TextUniversities>{descripcion}</TextUniversities>
                        <TextUniversities>Mision: {mision}</TextUniversities>
                        <TextUniversities>Vision: {vision}</TextUniversities>
                        <TextUniversities>Modalidades: {modalidades}</TextUniversities>
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