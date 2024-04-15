import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Config/firebaseConfig.js";
import { seedUniversities } from "../Utils/SeedUniversity.js";
import { useParams } from "react-router-dom";
import { UniversitiesDetailContainer } from "../UniversitiesDetailContainer/UniversitiesDetailContainer.jsx";
import { Container, ContainerCard } from "../UI Kit/DesignUniversitiesDetailContainer.jsx";
import { Siderbar } from "../Sidebar/Siderbar.jsx";

export const Universities = () => {
  const { name } = useParams();
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

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultado = tablaUniversities.filter((university) => {
      if (university.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return university;
      }
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
        <Siderbar />
        <ContainerCard>
          <div>
            <button>Buscar por nombre</button>
            <input
              value={busqueda}
              onChange={handleChange}
            />
          </div>
          {universities.map(university => (
            <UniversitiesDetailContainer key={university.id} {...university} />
          ))}
        </ContainerCard>
      </Container>
    </>
  );
};