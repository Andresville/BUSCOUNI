import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Config/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { University } from "../University/University";
import { Container, ContainerCard, TitleUniversities } from "../UI Kit/DesignUniversitiesDetailContainer";
import { Siderbar } from "../Sidebar/Siderbar";


export const UniversitiesDegreeDetailContainer = () => {
    const { carrera } = useParams();
    const [universities, setUniversities] = useState([]);
  
    useEffect(() => {
      const getUniversitiesDB = async () => {
        try {
          if (!carrera) {
            console.log("El parámetro 'carrera' está vacío.");
            return;
          }
  
          const universitiesRef = collection(db, "universities");
          const q = query(universitiesRef, where(`carreras.${carrera}`, "!=", null));
          const querySnapshot = await getDocs(q);
          const universityList = [];
          querySnapshot.forEach((doc) => {
            universityList.push(doc.data());
          });
          setUniversities(universityList);
        } catch (error) {
          console.error("Error al obtener la carrera:", error);
        }
      };
  
      getUniversitiesDB();
    }, [carrera]);
  
    const handleSearch = (searchTerm) => {
      const resultado = universities.filter((university) => {
        if (university.carreras && university.carreras[carrera]) {
          const carreraData = university.carreras[carrera];
          return (
            university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (carreraData && carreraData.tipoCursada.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (carreraData && carreraData.duracion.toLowerCase().includes(searchTerm.toLowerCase())) ||
            university.type.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        return false;
      });
      setUniversities(resultado);
    };
    
  
    return (
      <>
        <Container>
          <Siderbar onSearch={handleSearch} />
          <ContainerCard>
          <TitleUniversities>Carrera de {carrera}({universities.length})</TitleUniversities>
            {universities.length > 0 ? (
              universities.map((university, index) => (
                <University key={index} {...university} carrera={carrera} />
              ))
            ) : (
              <p>Cargando Universidades</p>
            )}
          </ContainerCard>
        </Container>
      </>
    );
  };
  