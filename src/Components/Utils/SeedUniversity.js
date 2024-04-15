import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Config/firebaseConfig";

const universities = [
    {
        name: "escuela_da_vinci_de_arte_y_diseño_multimedial",
        name1: "Escuela Da Vinci de Arte y Diseño Multimedial",
        carreras: {
            Diseño: {
                duracion: "4 años",
                materias: "36 materias",
                tipoCursada: "A distancia",
                titulo: "Tecnicatura"
            },
            Abogacia: {
                duracion: "5 años",
                materias: "48 materias",
                tipoCursada: "Presencial",
                titulo: "Doctorado"
            },
            Medicina: {
                duracion: "6 años",
                materias: "55 materias",
                tipoCursada: "Presencial",
                titulo: "Doctorado"
            },
            Contador: {
                duracion: "5 años",
                materias: "48 materias",
                tipoCursada: "Presencial",
                titulo: "Doctorado"
            }
        },
        type: "Privada",
        urlUniversity:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fJp5-Vs_-3YyzoCOjL_0uZhEzcQ_D6r6tzeX6SimfA&s",
    },
    {
        name: "universidad_catolica_de_cuyo",
        name1: "Universidad Catolica de Cuyo",
        carreras: {
            Diseño: {
                duracion: "4 años",
                materias: "40 materias",
                tipoCursada: "A distancia / Presencial",
                titulo: "Tecnicatura"
            },
            Abogacia: {
                duracion: "5 años",
                materias: "48 materias",
                tipoCursada: "A distancia / Presencial",
                titulo: "Doctorado"
            },
            Contador: {
                duracion: "5 años",
                materias: "48 materias",
                tipoCursada: "Presencial",
                titulo: "Doctorado"
            }
        },
        type: "Publica",
        urlUniversity:"https://media.licdn.com/dms/image/C4E0BAQHb_OjOvcvwDg/company-logo_200_200/0/1631343616583?e=2147483647&v=beta&t=tx1DpXQi06gTQMOSsp5u0m7bgeue02I53GhHFTRIwhs",
    },
    {
        name: "universidad_de_moron",
        name1: "Universidad de Moron", 
        carreras: {
            Diseño: {
                duracion: "4 años",
                materias: "36 materias",
                tipoCursada: "Presencial",
                titulo: "Tecnicatura"
            },
            Turismo: {
                duracion: "4 años",
                materias: "40 materias",
                tipoCursada: "Presencial",
                titulo: "Licenciado"
            },
            Contador: {
                duracion: "5 años",
                materias: "48 materias",
                tipoCursada: "Presencial",
                titulo: "Doctorado"
            }
        },
        type: "Privada",
        urlUniversity:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlfgeRBtTW4P5n6B6fAsWH6yglvbZ2-vCP5XD_jRpyg&s",
    },
    {
        name: "universidad_nacional_del_litoral",
        name1: "Universidad Nacional del Litoral",
        carreras: {
            Diseño: {
                duracion: "4 años",
                materias: "36 materias",
                tipoCursada: "Presencial",
                titulo: "Tecnicatura"
            },
            Turismo: {
                duracion: "5 años",
                materias: "48 materias",
                tipoCursada: "A distancia",
                titulo: "Licenciado"
            },
            Medicina: {
                duracion: "6 años",
                materias: "55 materias",
                tipoCursada: "Presencial",
                titulo: "Doctorado"
            }
        },
        type: "Publica",
        urlUniversity:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUiD_AKkYEJmnASJ60aSagOBQxMuzwp0DFcTQjSDk_Hw&s",
    },
    {
        name: "universidad_kennedy",
        name1: "Universidad Kennedy", 
        carreras: {
            Diseño: {
                duracion: "4 años",
                materias: "36 materias",
                tipoCursada: "A distancia",
                titulo: "Tecnicatura"
            },
            Abogacia: {
                duracion: "5 años",
                materias: "48 materias",
                tipoCursada: "Presencial",
                titulo: "Doctorado"
            },
            Turismo: {
                duracion: "5 años",
                materias: "48 materias",
                tipoCursada: "Presencial",
                titulo: "Licenciado"
            }
        },
        type: "Privada",
        urlUniversity:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNFfAT9bKjzsNMWjRgx1Zz9cqahyOnOPVqC4qzyLz21Q&s",
    }
];

export const seedUniversities = () => {
    universities.forEach((university) => {
        addDoc(collection( db, "universities"), university);
    });
};