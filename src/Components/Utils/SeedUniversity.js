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
        direccion: "Felipe Velázquez 471, ciudad de San Luis, Argentina",
        telefono: "0800-999-7207",
        telefono1: "+54 2664 -423-572",
        correo: "sec.extension@uccuyosl.edu.ar",
        web: "https://www.uccuyosl.edu.ar/",
        descripcion: "La Universidad Católica de Cuyo es un centro de estudios universitarios en Argentina que tiene sede en las provincias de San Juan, San Luis y Mendonza. Se dictan diversas carreras de grado, preparado y postgrado y posee institutos de nivel superior, y colegios de nivel inicial, primaria y secundaria.",
        mision: "La Universidad Católica de Cuyo forma personas integralmente, con aptitud para desarrollar sus capacidades en constante búsqueda de la verdad, iluminada por la revelación católica, a través de la investigación, la conservación y la comunicación del conocimiento, con una permanente actitud para recrear el continuo diálogo entre la razón y la fe.",
        vision: "Una Universidad afianzada en la calidad de sus servicios académicos y administrativos, capaz de generar una estructura de soporte para su mejora continua, y con una actividad académica fortalecida por la capacitación de sus profesores y por la excelencia de su actividad intelectual. Una comunidad educativa que, como miembro de la Iglesia, genere un ámbito propicio para la participación de sus integrantes en la actividad pastoral.",
        modalidades: "Presencial / A Distancia",
        carreras: {
            Diseño: {
                duracion: "4 años",
                tipoCursada: "A distancia / Presencial",
                titulo: "Licenciatura",
                titulo1: "Licenciatura en Diseño de Comunicacion Visual",
                titulo_intermedio:"Tecnico en diseño grafico",
                campo_laboral: "El Lic. en Diseño de Comunicación Visual está capacitado para el ejercicio libre de la profesión en el amplio campo del diseño de comunicaciones visuales, para ser integrante de empresas de prestación de servicios profesionales en las áreas del diseño en comunicación visual, realizando asesorías comunicacionales, evaluación de proyectos gráficos y conformando equipos multidisciplinarios en estudios de diseño, agencias de publicidad, empresas editoriales, imprentas, empresas de gráfica digital, medios de comunicación, etc.",
                perfil: "El Diseñador en Comunicación Visual está preparado para procesar, organizar y presentar información visual, mediante la utilización de códigos verbales y/o no verbales, en el área del diseño para información (diseño editorial: libros, revistas, diarios; diseño de tablas alfanuméricas: horarios, directorios; diseño de gráficos y diagramas, instrucciones, reglas de juego, manuales, informes, prospectos, señalización, mapas y planos, etc.). Interpretar, analizar y presentar visualmente, mediante la utilización de códigos verbales y/o no verbales, mensajes destinados a influir sobre la conducta del receptor en el área de diseño para la persuasión (publicidad comercial, diseño de envases, diseño de identidad de empresa, propaganda política o ideológica, campañas de interés social). Diseñar material destinado a la educación. Interpretar, analizar y presentar información que contribuya a la estructuración de sistemas gráficos (diseño de formularios, boletos de transporte, entradas para espectáculos, papelería comercial, comunicaciones empresariales internas, diseño de valores (billetes de banco, sellos postales, etc.). Realizar tareas de asesoramiento, estudio e investigación en las áreas de la comunicación visual.",
                materias: "40 materias",
                primer_ano: ["Fundamentos del diseño",
                    "Dibujo tecnico",
                    "Dibujo a mano alzada I",
                    "Teoria de la comunicacion",
                    "Tecnologia I",
                    "Computacion grafica I",
                    "Elementos de la filosofia",
                    "Taller de diseño I",
                    "Tipografia I",
                    "Dibujo a mano alzada II",
                    "Psicologia de la percepcion",
                    "Tecnologia II",
                    "Computacion grafica II"
                ],
                segundo_ano: ["Taller de diseño II",
                    "Tipografia II",
                    "Tecnicas de expresion graficas",
                    "Historia del diseño I",
                    "Tecnologia III",
                    "Computacion grafica III",
                    "Taller de diseño II",
                    "Tipografia III",
                    "Introduccion a la fotografia",
                    "Historia del diseño II",
                    "Tecnologia IV",
                    "Computacion grafica IV",
                    "Teologia docmatica I"
                ],
                tercer_ano:["Taller de diseño IV",
                    "Tipografia IV",
                    "Semiotica I",
                    "Historia del diseño III Ingles I",
                    "Idioma III",
                    "Metodologia del diseño",
                    "Fotografia",
                    "Teologia docmatica II",
                    "Sociologia",
                    "Taller de diseño V",
                    "Semiotica II",
                    "Computacion grafica V",
                    "Optativa I",
                    "Teologia moral"

                ],
                cuarto_ano:["Proyecto de diseño",
                    "Legislacion industrial",
                    "Mercadotecnia I",
                    "Metodologia de la investigacion",
                    "Optativa II",
                    "Optativa III",
                    "Ingles II",
                    "Proyecto de diseño final",
                    "Mercadotecnia II",
                    "Doctrina social de la iglesia",
                    "Optativa IV",
                    "Optativa V",
                    "Etica y deontologia profesional",
                    "Practica profesional (pasantia)"

                ]
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