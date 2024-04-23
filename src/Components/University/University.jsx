import { Link } from "react-router-dom";
import { DetailContainer, DetailContainerUniversities, LogoUniversity, TextContainerUniversity, TextUniversities, TextUniversity, TitleUniversities } from "../UI Kit/DesignUniversitiesDetailContainer";

export const University = ({ urlUniversity, name1, carreras, type, carrera, name }) => {
    const carreraData = carreras[carrera]; 

    if (!carreraData) {
        return <p>Cargando Carrera</p>; 
    }

    return (
        <>
            <DetailContainer>
                <LogoUniversity src={urlUniversity} alt="" />
                <DetailContainerUniversities>
                    <TitleUniversities>{name1}</TitleUniversities>
                    <TextContainerUniversity>
                        <TextUniversities>Carrera: {carrera}</TextUniversities>
                        <TextUniversity>Duración: {carreraData.duracion}</TextUniversity>
                        <TextUniversity>Materias: {carreraData.materias}</TextUniversity>
                        <TextUniversity>Tipo de Cursada: {carreraData.tipoCursada}</TextUniversity>
                        <TextUniversity>Título: {carreraData.titulo}</TextUniversity>
                    </TextContainerUniversity>
                    <TextUniversity>Tipo de Universidad: {type}</TextUniversity>
                    <Link to={`/universities-degree/${carrera}/${name}`}>
                        <button>Más Información</button>
                    </Link>
                </DetailContainerUniversities>
            </DetailContainer>
        </>
    )
};