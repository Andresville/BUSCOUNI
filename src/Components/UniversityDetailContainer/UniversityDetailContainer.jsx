import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Config/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Container, ContainerCard } from "../UI Kit/DesignUniversitiesDetailContainer";
import { Siderbar } from "../Sidebar/Siderbar";
import { UniversitiesDetailContainer } from "../UniversitiesDetailContainer/UniversitiesDetailContainer";

export const UniversityDetailContainer = () => {
    const { name } = useParams();
    const [university, setUniversity] = useState(null);

    useEffect(() => {
        const getUniversitiesDB = async () => {
            try {
                const universitiesRef = collection(db, "universities");
                const q = query(universitiesRef, where("name", "==", name));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const universityData = querySnapshot.docs[0].data();
                    setUniversity(universityData);
                } else {
                    console.log("No se encontró la universidad");
                }
            } catch (error) {
                console.error("Error al obtener las universidades:", error);
            }
        };

        getUniversitiesDB();
    }, [name]);

    return (
        <>
            <Container>
                <Siderbar />
                <ContainerCard>
                    {university ? <UniversitiesDetailContainer {...university} /> : <p>Cargando Universidad</p>}
                </ContainerCard>
            </Container>
        </>
    );
};