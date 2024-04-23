import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Config/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { DegreeDetail } from "../DegreeDetail/DegreeDetail";

export const DegreeDetailContainer = () => {
    const { carrera, name } = useParams();
    const [selectedUniversity, setSelectedUniversity] = useState(null);

    useEffect(() => {
        const getUniversityDetails = async () => {
            try {
                const universitiesRef = collection(db, "universities");
                const q = query(universitiesRef, where(`carreras.${carrera}`, "!=", null));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    const universityData = doc.data();
                    // Comprobamos si el nombre de la universidad coincide con el parámetro de la URL
                    if (universityData.name === name) {
                        setSelectedUniversity(universityData);
                    }
                });
            } catch (error) {
                console.error("Error al obtener los detalles de la universidad:", error);
            }
        };

        getUniversityDetails();
    }, [carrera, name]);

    console.log(selectedUniversity);
    return (
        <>
            {selectedUniversity ? (
                <DegreeDetail {...selectedUniversity} carrera={carrera} />
            ) : (
                <p>Cargando detalles de la universidad...</p>
            )}
        </>
    );
};
