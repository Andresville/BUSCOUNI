import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Config/firebaseConfig";

const universities = [
    {
        name: "escuela_da_vinci_de_arte_y_diseño_multimedial",
        name1: "Escuela Da Vinci de Arte y Diseño Multimedial",
        direccion: "Av. Corrientes 2037/49 / C.A.B.A. - Argentina",
        telefono: "(+54-11) 5032-0076",
        telefono1: "(+54-11) 5032-0055",
        correo: "contacto@davinci.edu.ar",
        web: "www.davinci.edu.ar",
        descripcion: "Leonardo Da Vinci Escuela Superior De Arte Multimedial, más conocida como Escuela Da Vinci, creada en 1993, es una institución líder en educación, caracterizada por programas de estudio innovadores, que integran las Nuevas Tecnologías de la Informática y las Comunicaciones con el Arte y el Diseño. Con tres sedes en pleno centro de la Ciudad de Buenos Aires, Argentina, Da Vinci fue el primer instituto en ofrecer la carrera de Diseño Multimedial en Latinoamérica. Actualmente también ofrece las carreras de Diseño y Programación de Videojuegos, Diseño y Programación Web, Diseño Gráfico, Cine de Animación y Posproducción y Analista de Sistemas, además de numerosos cursos de diseño, programación, videojuegos, 3D y arte digital en formato de Cursos para Adultos, Chicos y Adolescentes. ",
        mision: "Es pionera en generar planes de estudio de vanguardia que integran arte, diseño y tecnología. Incorpora permanentemente nuevas tecnologías a carreras tradicionales, logrando que su alumnado se destaque y sepa utilizar todo tipo de herramientas digitales y tradicionales.",
        vision: "Cuenta con la infraestructura tecnológica más grande, entre las instituciones educativas argentinas, completamente puesta a disposición de sus alumnos. Los planes de estudios son revisados semestralmente y actualizados por especialistas en cada disciplina.",
        modalidades: "A Distancia",
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
        direccion: "Machado 854, Morón, Buenos Aires, Argentina",
        telefono: "+54 (11) 5627-2000",
        telefono1: "+54 (11) 5627-2011",
        correo: "mesadeentradas@unimoron.edu.ar",
        web: "www.unimoron.edu.ar",
        descripcion: "La Universidad de Morón es una institución educativa de gestión privada que desde 1960 se dedica a impartir enseñanza en el ámbito superior. En la actualidad posee 26.000 m² de infraestructura educativa, 6.000 m² destinados a Laboratorios y las modernas instalaciones de su Biblioteca. Por sus aulas pasaron más de 51.000 profesionales que egresaron de alguna de las 9 Escuelas Superiores, con carreras que cubren todas las áreas del conocimiento.",
        mision: "Fomentar la investigación y el acrecentamiento del saber. Estimular la formación científica, profesional, humanística y técnica en el más alto nivel. Contribuir a la preservación de la cultura nacional, y desarrollar las actitudes y valores que requiere la formación de personas responsables con conciencia ética y solidaria, reflexiva, crítica, capaces de mejorar la calidad de vida, consolidar el respeto al medioambiente, a las instituciones de la República y a la vigencia del orden democrático. Posibilitar la formación integral y permanente de sus integrantes, para que se realicen como personas en las dimensiones cultural, social, estética y ética, de acuerdo con sus capacidades, guiados por los valores de vida, libertad, bien, verdad, paz, solidaridad, tolerancia, igualdad y justicia, y sean capaces de elaborar, su propio proyecto de vida.",
        vision: "Ser una Institución con profundo arraigo regional, de amplia diversidad disciplinar y de auténtico espíritu democrático, el que la caracteriza en el concierto de las universidades privadas del país; atenta a las nuevas necesidades y demandas de la comunidad y de la sociedad, y de su inserción en la educación internacional.",
        modalidades: "A Distancia",
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
        direccion: "Bv. Pellegrini 2750 - (3000) Santa Fe",
        telefono: "+54 (0342) 4571110",
        telefono1: "+54 (0342) 4571115",
        correo: "informes@unl.edu.ar",
        web: "www.unl.edu.ar",
        descripcion: "La Universidad Nacional del Litoral, fue creada por Ley Nacional el 17 de octubre de 1919, cumplió su primer centenario. Testigo directo del crecimiento de la ciudad de Santa Fe y del desarrollo de toda una región, forjó su prestigio y su excelencia de la mano de grandes personalidades que formaron parte de su historia, de los rectores que llevaron adelante sus gobiernos, de los símbolos que levantan con orgullo sus valores y de su enorme comunidad universitaria. Su histórico Paraninfo fue testigo de las reformas constitucionales y del primer Debate Presidencial Federal, Obligatorio y organizado por Ley Nacional. Es hija del movimiento reformista que en 1918 proclamó al país y a toda América Latina sus ideas de comunidad universitaria libre y abierta, políticamente autónoma y aseguradora del carácter estatal de la enseñanza universitaria. La Universidad es fruto de arduas gestiones de gobernantes y legisladores de la provincia y de la movilización estudiantil y de toda la ciudadanía santafesina. Nace como una universidad regional, ya que comprendía escuelas e institutos asentados en las ciudades de Santa Fe, Paraná, Rosario y Corrientes. Por este motivo, a lo largo de su vida, la UNL ha sido testigo directo del crecimiento de la región centro-litoral argentina, contribuyendo al surgimiento de las Universidades Nacionales del Nordeste (1956), de Rosario (1968) y de Entre Ríos (1973), y concentrando luego sus actividades en el centro-norte de la provincia de Santa Fe con sedes en las ciudades de Santa Fe, Esperanza, Gálvez, Reconquista, Avellaneda, Rafaela y Sunchales desde donde ofrece excelencia académica, ciencia, tecnología, cultura e innovación y desarrolla su compromiso social. La creación de la Universidad revistió características novedosas debido a que abarcaba Facultades y escuelas ubicadas en distintas ciudades de la región. En Santa Fe, se creó sobre la base de los estudios de derecho existentes en la Universidad de Santa Fe (desde 1889), y sobre la base de la Escuela Industrial (creada en 1909). Las primeras Facultades fueron la de Derecho y la de Química Industrial y Agrícola. El edificio del Rectorado, cuya construcción finalizó en 1935, ha trascendido por los acontecimientos que en el mismo tuvieron lugar. Entre ellos cabe señalar que la sala del Paraninfo fue sede en dos oportunidades de la Convención Nacional Constituyente, en 1957 y en 1994.",
        mision: "La Universidad se compone de diez Facultades, dos Centros Universitarios, una Sede Universitaria, un Instituto Superior, tres Escuelas de Nivel Medio y una Escuela de Nivel Primario y Jardín Inicial. En cada una de las unidades académicas se dictan carreras que pertenecen a diferentes áreas del saber científico, humanístico, técnico y cultural, que están consustanciadas con las problemáticas de la región donde la Universidad está inserta.",
        vision: "La UNL dedica, hace más de 10 años, destina parte de sus esfuerzos y recursos a la promoción de diversas iniciativas orientadas al desarrollo de empresas, la creación de nuevas empresas y la formación de emprendedores con capacidades para ponerlas en marcha, enmarcado en una política de desarrollo regional. Apoya las iniciativas emprendedoras que surgen del ámbito de la comunidad universitaria y en distintos sectores de la sociedad. Mediante diferentes herramientas que pone a disposición, promueve la conformación, incubación y puesta en marcha de empresas entre alumnos, docentes, investigadores y graduados. Por intermedio de estas acciones asume una actitud activa y transformadora del entorno social del que es parte, buscando aportar al crecimiento de un tejido económico sólido y sustentable, que amplíe las posibilidades de inserción laboral genuina para los distintos segmentos de la comunidad.",
        modalidades: "Presencial",
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
        direccion: "Próximamente - Villa Mercedes - San Luis",
        telefono: "(266) 4773137",
        telefono1: "(260) 4343268",
        correo: "san.luis2_pk@kennedy.edu.ar",
        web: "www.kennedy.edu.ar",
        descripcion: "La Universidad Kennedy es una universidad de gestión privada que nació en 1964 como una institución no elitista y de compromiso socio-comunitario. Entiende a la educación como un proceso que parte del estudiante pero que es facilitado e incentivado por el docente. Fue fundada por un grupo excepcional de intelectuales entre los que se destacaron el Dr. Miguel Herrera Figueroa y el Dr. Pedro David. Su motivación fue llevar la innovación, la excelencia y la apertura al mundo al ámbito universitario. El espíritu visionario marcó a la Universidad desde el comienzo: su oferta académica incorporó desde un principio carreras que estaban poco desarrolladas o no existían en otras casas de estudio como Psicología, Ciencias Políticas, Relaciones Públicas, Ciencias y Artes del Teatro. ",
        mision: "La Universidad Kennedy es una de las primeras universidades privadas del país, con 60 años de trayectoria. Ha formado más de 30.000 graduados en múltiples disciplinas y cuenta con un plantel docente que supera los 700 profesores. En la Kennedy entendemos el desafío de ser estudiante universitario, por eso te ofrecemos un Aula Virtual y Tutorías Personalizadas durante toda tu carrera. También contás con Bibliotecas especializadas en cada uno de los edificios y la posibilidad de realizar carreras en Modalidad Virtual. Además, podés realizar intercambios con Universidades de otros países. ",
        vision: "Valoramos tu esfuerzo, por eso creamos un programa de Becas y Beneficios, realizamos reconocimiento de materias si venís de otras instituciones universitarias o terciarias y la posibilidad de acreditar tus conocimientos de inglés a través de un examen. Y, porque sabemos que el traspaso a la vida laboral es muy importante, contamos con Programas de Pasantías.",
        modalidades: "Presencial / A Distancia",
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