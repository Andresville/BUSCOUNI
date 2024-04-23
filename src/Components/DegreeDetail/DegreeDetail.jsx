import {DegreeDetailText2, DegreeDetailTitle2, DegreeDetailContainer, DegreeDetailText, DegreeDetailTitle, DegreeDetailTitleOther, DegreeDetailYearContainer, DegreeDetailYearContainer2, DegreeDetailTitleOther2 } from "../UI Kit/DesignDegreeDetail";


export const DegreeDetail = ({ carreras, carrera }) => {
    const carreraData = carreras[carrera]; 


    if (!carreraData) {
        return <p>Cargando Carrera</p>; 
    }

    return (
        <>
            <DegreeDetailContainer>
                    <DegreeDetailTitle>{carreraData.titulo1}</DegreeDetailTitle>
                        <DegreeDetailTitleOther>Titulo: {carreraData.titulo1}</DegreeDetailTitleOther>
                        <DegreeDetailTitleOther>Modalidad: {carreraData.tipoCursada}</DegreeDetailTitleOther>
                        <DegreeDetailTitleOther>Campo Laboral:</DegreeDetailTitleOther>
                        <DegreeDetailText>{carreraData.campo_laboral}</DegreeDetailText>
                        <DegreeDetailTitleOther>Perfil Egresado:</DegreeDetailTitleOther>
                        <DegreeDetailText>{carreraData.perfil}</DegreeDetailText>

                        <DegreeDetailYearContainer>
                        <DegreeDetailTitleOther2>Primer Año</DegreeDetailTitleOther2>
                        <DegreeDetailYearContainer2>
                        {carreraData.primer_ano.map((materia, index) => (
                        <DegreeDetailText2 key={index}>{materia}</DegreeDetailText2>
                        ))}
                        </DegreeDetailYearContainer2>
                        </DegreeDetailYearContainer>

                        <DegreeDetailYearContainer>
                        <DegreeDetailTitleOther2>Segundo Año</DegreeDetailTitleOther2>
                        <DegreeDetailYearContainer2>
                        {carreraData.segundo_ano.map((materia, index) => (
                        <DegreeDetailText2 key={index}>{materia}</DegreeDetailText2>
                        ))}
                        </DegreeDetailYearContainer2>
                        </DegreeDetailYearContainer>
                        
                        <DegreeDetailTitle2>Titulo Intermedio: {carreraData.titulo_intermedio}</DegreeDetailTitle2>

                        <DegreeDetailYearContainer>
                        <DegreeDetailTitleOther2>Tercer Año</DegreeDetailTitleOther2>
                        <DegreeDetailYearContainer2>
                        {carreraData.tercer_ano.map((materia, index) => (
                        <DegreeDetailText2 key={index}>{materia}</DegreeDetailText2>
                        ))}
                        </DegreeDetailYearContainer2>
                        </DegreeDetailYearContainer>

                        <DegreeDetailYearContainer>
                        <DegreeDetailTitleOther2>Cuarto Año</DegreeDetailTitleOther2>
                        <DegreeDetailYearContainer2>
                        {carreraData.cuarto_ano.map((materia, index) => (
                        <DegreeDetailText2 key={index}>{materia}</DegreeDetailText2>
                        ))}
                        </DegreeDetailYearContainer2>
                        </DegreeDetailYearContainer>
                        
            </DegreeDetailContainer>
        </>
    )
};