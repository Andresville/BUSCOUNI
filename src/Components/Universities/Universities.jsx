import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Config/firebaseConfig.js";
import { seedUniversities } from "../Utils/SeedUniversity.js";
import { useLocation, useParams } from "react-router-dom";
import { UniversitiesDetailContainer } from "../UniversitiesDetailContainer/UniversitiesDetailContainer.jsx";
import { Container, ContainerCard, TitleUniversities } from "../UI Kit/DesignUniversitiesDetailContainer.jsx";
import { Siderbar } from "../Sidebar/Siderbar.jsx";

export const Universities = () => {
  const { name } = useParams();
  const location = useLocation();
  const showFullDetail = location.pathname !== "/universities/:name";
  const [universities, setUniversities] = useState([]);
  const [tablaUniversities, setTablaUniversities] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const getUniversitiesDB = (name) => {
    const myUniversities = name
      ? query(collection(db, "universities"), where("name", "==", name))
      : query(collection(db, "universities")); //FILTRA POR TIPO
    //const myArtistas = query( collection ( db, "artistas")); MUESTRA TODOS
    getDocs(myUniversities)
      .then((resp) => {
        const universitiesList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUniversities(universitiesList);
        setTablaUniversities(universitiesList);
      })
      .catch(error => console.log(error));
  };

  const handleSearch = (searchTerm) => {
    const resultado = universities.filter((university) => {
      return (
        university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //university.carrera.duracion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //university.carrera.tipoCursada.toLowerCase().includes(searchTerm.toLowerCase()) ||
        university.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setUniversities(resultado);
  };

  useEffect(() => {
    getUniversitiesDB(name)

    //seedUniversities();
  }, [name]);


  return (
    <>
      <Container>
        <Siderbar onSearch={handleSearch} />
        <ContainerCard>
        <TitleUniversities>Universidades</TitleUniversities>
          {universities.map(university => (
            <UniversitiesDetailContainer
              key={university.id}
              {...university}
              showFullDetail={showFullDetail}
            />
          ))}
        </ContainerCard>
      </Container>
    </>
  );
};