export interface Author {
  id: string;
  name: string;
  country: string;
  birth: string;
  death: string;
  mainContribution: string;
  keyPhrase: string;
  concept: string;
  image: string;
  videoUrl: string;
}

export const authors: Author[] = [

  {
    id: "Eduardo Galeano",
    name: "Eduardo Galeano",
    country: "Uruguay",
    birth: "1940",
    death: "2015",
    mainContribution: "Escritor y periodista uruguayo, autor de Las venas abiertas de América Latina. Su obra denuncia la explotación histórica del continente y promueve una conciencia crítica latinoamericana, combinando literatura, historia y política desde una perspectiva humanista y descolonial.",
    keyPhrase: "La historia nunca dice adiós. Lo que dice siempre es: hasta luego. (Refleja su visión de la historia como una memoria viva que interpela el presente.)",
    concept: "Conciencia histórica, crítica al colonialismo y al poder, y reivindicación de las voces silenciadas de América Latina.",
    image: '/ImagenesAutores/Eduardo Galeano.png',
    videoUrl: "https://youtu.be/1RNrrWFKMJw?si=VFZ2E3INhnvy0bUP"
  },
  {
    id: "kusch",
    name: "Rodolfo Kusch",
    country: "Argentina",
    birth: "1922",
    death: "1979",
    mainContribution: "Filósofo y antropólogo argentino que desarrolló una filosofía latinoamericana basada en el pensamiento indígena y popular, en contraposición a la racionalidad eurocéntrica.",
    keyPhrase: "Vivir es una condición atávica condicionada por milenios de vida de la humanidad, pero que no conocemos.(Una reflexión sobre la profundidad existencial del ser humano desde una perspectiva no occidental.)",
    concept: "Pensamiento indígena y popular como alternativa a la racionalidad occidental, reivindicando formas de vida, saber y existencia propias de América Latina.",
    image: '/ImagenesAutores/Rodolfo Kusch.png',
    videoUrl: "https://vt.tiktok.com/ZSkcAAdct/"
  },
  {
    id: "sarmiento",
    name: "Domingo Faustino Sarmiento",
    country: "Argentina", 
    birth: "1811",
    death: "1888",
    mainContribution: "Considerado el padre del aula en Argentina, fue un gran promotor de la educación pública, laica y obligatoria. Durante su presidencia (1868–1874), impulsó la creación de más de 800 escuelas y fomentó la formación docente.",
    keyPhrase: "Educar al soberano.(Frase que resume su visión de que la educación es esencial para el ejercicio de la ciudadanía y el progreso de la nación.)",
    concept: "Educación como pilar del progreso social, la modernización y la construcción de una nación civilizada.",
    image: '/ImagenesAutores/Domingo Faustino Sarmiento.png',
    videoUrl: "https://youtu.be/xXsSBuDxo1g?si=hDzV6f9JPgRsttKP"
  },
  {
    id: "rivera",
    name: "Silvia Rivera Cusicanqui",
    country: "Bolivia",
    birth: "1949",
    death: "Actualidad",
    mainContribution: "Socióloga, historiadora y activista boliviana. Referente de la sociología descolonial, introdujo el concepto de ch'ixi para describir identidades que coexisten en tensión sin fusionarse, desafiando las lógicas binarias impuestas por el pensamiento colonial.",
    keyPhrase: "Nada sería posible si la gente no deseara lo imposible.(Una invitación a imaginar y construir alternativas radicales desde los márgenes.)",
    concept: "Descolonización del saber, identidad ch'ixi y crítica al multiculturalismo superficial que no transforma las estructuras de poder.",
    image: '/ImagenesAutores/Silvia Rivera Cusicanqui.png',
    videoUrl: "https://vt.tiktok.com/ZSkcAAdct/"
  },
  {
    id: "quijano",
    name: "Aníbal Quijano",
    country: "Perú",
    birth: "1928",
    death: "2018",
    mainContribution: "Sociólogo y pensador peruano que desarrolló los conceptos de colonialidad del poder y eurocentrismo, para explicar cómo persisten las estructuras de dominación racial, económica y epistémica desde la colonización hasta la actualidad.",
    keyPhrase: "Es tiempo de aprender a liberarnos del espejo eurocéntrico donde nuestra imagen es siempre, necesariamente, distorsionada. (Una crítica al pensamiento dominante que impone una visión del mundo desde Europa, invisibilizando otras formas de conocimiento.)",
    concept: "Colonialidad del poder, racismo estructural y descolonización del saber como claves para entender y transformar las desigualdades en América Latina.",
    image: '/ImagenesAutores/Anibal Quijano.jpg',
    videoUrl: "https://youtu.be/UhQU4HtGDpY?si=CSB5JfuFQz2rz-0P"
  },
  {
    id: "mariategui",
    name: "José Carlos Mariátegui",
    country: "Perú",
    birth: "1894",
    death: "1930",
    mainContribution: "Intelectual marxista peruano que propuso una educación socialista, crítica y liberadora, basada en la realidad indígena y campesina del Perú, y alejada de modelos europeos.",
    keyPhrase: "El problema del indio es el problema de la tierra. (Una afirmación que vincula la opresión indígena con la estructura económica y la propiedad de la tierra.)",
    concept: "Educación crítica y transformadora, enraizada en las condiciones sociales, culturales y económicas de América Latina, especialmente en las luchas del campesinado e indígenas.",
    image: '/ImagenesAutores/José Carlos Mariátegui.png',
    videoUrl: "https://youtu.be/OylJbxm0x_o?si=r5NUQMgtMAzn8F2z"
  },
  {
    id: "freire",
    name: "Paulo Freire",
    country: "Brasil",
    birth: "1921",
    death: "1997",
    mainContribution: "Pedagogo  y filósofo brasileño, creador de la Pedagogía del Oprimido, que promueve una educación crítica, dialógica y liberadora, centrada en la conciencia social y política de los oprimidos.",
    keyPhrase: "La educación no cambia el mundo, cambia a las personas que van a cambiar el mundo. (Una afirmación que destaca el poder transformador de la educación en manos de sujetos conscientes.)",
    concept: "Educación emancipadora, basada en el desarrollo de la conciencia crítica (conscientização) y en el diálogo como herramienta de transformación social.",
    image: '/ImagenesAutores/Paulo Freire.jpg',
    videoUrl: "https://youtu.be/t-Y8W6Ns90U?si=tUq9irLiESFk99Ef"
  },
  {
    id: "teixeira",
    name: "Anísio Teixeira",
    country: "Brasil",
    birth: "1900",
    death: "1971",
    mainContribution: "Impulsor de la educación pública, laica y gratuita en Brasil, y uno de los principales representantes del movimiento de la Escuela Nueva, que promovía una enseñanza activa, democrática y centrada en el estudiante.",
    keyPhrase: "Sin educación democrática, no hay democracia real. (Refleja su convicción de que la educación es la base para una ciudadanía libre y participativa.)",
    concept: "Educación democrática y activa, orientada al desarrollo integral del individuo y a la formación de ciudadanos críticos y comprometidos con la vida pública.",
    image: '/ImagenesAutores/Anísio Teixeira.png',
    videoUrl: "https://vt.tiktok.com/ZSkcSKvHe/"
  },
  {
    id: "gonzalez",
    name: "Lélia González",
    country: "Brasil",
    birth: "1935",
    death: "1994",
    mainContribution: "Introdujo el concepto de Amefricanidade para destacar la influencia negra en la identidad latinoamericana.",
    keyPhrase: "Nuestra américa es afro-latino-ameríndia.",
    concept: "Educación como práctica de liberación cultural, que descoloniza el conocimiento y visibiliza las voces afro e indígenas.",
    image: '/ImagenesAutores/Lélia González.png',
    videoUrl: "https://youtu.be/VXha5TgwUVI?si=6unF74Xl4T1rbAbM"
  },
  {
    id: "demo",
    name: "Pedro Demo",
    country: "Brasil",
    birth: "1941",
    death: "2023",
    mainContribution: "Sociólogo y educador brasileño que destacó la importancia de una educación basada en la investigación, el pensamiento crítico y la autonomía del estudiante, superando la memorización mecánica.",
    keyPhrase: "No hay ciudadanía sin educación de calidad. (Una afirmación que vincula directamente la calidad educativa con la formación de ciudadanos activos y responsables.)",
    concept: "Investigación educativa, calidad del aprendizaje y formación de una ciudadanía crítica y participativa.",
    image: '/ImagenesAutores/Pedro Demo.png',
    videoUrl: "https://vt.tiktok.com/ZSkcAUjtn/"
  },
  {
    id: "marti",
    name: "José Martí",
    country: "Cuba",
    birth: "1853",
    death: "1895",
    mainContribution: "Defendió una educación humanista, crítica y comprometida con la justicia social, como base para la libertad y la dignidad de los pueblos latinoamericanos.",
    keyPhrase: "Ser culto es el único modo de ser libre. (Expresa su convicción de que el conocimiento es esencial para la emancipación individual y colectiva.)",
    concept: "La educación como herramienta de emancipación, formación ética y construcción de ciudadanía activa y consciente.",
    image: '/ImagenesAutores/José Martí.png',
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
  },
  {
    id: "vasconcelos",
    name: "José Vasconcelos",
    country: "México",
    birth: "1882",
    death: "1959",
    mainContribution: "Promotor de la educación pública en México tras la Revolución Mexicana; impulsó una campaña masiva de alfabetización y fundó la Secretaría de Educación Pública (SEP) en 1921. Por mi raza hablará el espíritu. (Lema de la Universidad Nacional Autónoma de México, que refleja su visión de una identidad cultural mestiza y espiritual para América Latina.)",
    keyPhrase: "Por mi raza hablará el espíritu.",
    concept: "Educación humanista e integradora, que revaloriza la identidad cultural latinoamericana.",
    image: '/ImagenesAutores/José vasconcelos.jpg',
    videoUrl: "https://youtu.be/4WhFpVywbe4?si=GRBf8qP-q_jv8Ko5"
  },
  {
    id: "rodriguez",
    name: "Simón Rodríguez",
    country: "Venezuela",
    birth: "1769",
    death: "1854",
    mainContribution: "Fue maestro y mentor de Simón Bolívar. Propuso una educación popular, inclusiva, creativa y adaptada a la realidad latinoamericana, rompiendo con los moldes coloniales.",
    keyPhrase: "O inventamos o erramos. (Una invitación a la originalidad y a construir modelos propios, en lugar de copiar los europeos.)",
    concept: "Defensor de una educación emancipadora, autóctona y transformadora, orientada a formar ciudadanos libres y conscientes en América Latina.",
    image: '/ImagenesAutores/Simón Rodríguez.png',
    videoUrl: "https://youtu.be/De7_PqIUKvU?si=d1GdP4HMwEJiGa4U"
  }
  ,{
    id: "rodriguez",
    name: "Simon Bolivar",
    country: "Venezuela",
    birth: "1783",
    death: "1830",
    mainContribution: "Líder de la independencia sudamericana y promotor de la educación como base para la libertad y la ciudadanía. Fundó instituciones educativas como la Universidad de Trujillo (Perú, 1824) y propuso la creación de un (Poder Moral) con una cámara dedicada a la educación",
    keyPhrase: "Un pueblo ignorante es instrumento ciego de su propia destrucción. (Expresa su convicción de que la educación es esencial para evitar la opresión y construir repúblicas libres.)",
    concept: "Educación como herramienta de emancipación, formación cívica y consolidación de la democracia en América Latina. Influido por pensadores como Rousseau, Montesquieu, Voltaire y su maestro Simón Rodríguez",
    image: '/ImagenesAutores/Simon Bolivar.png',
    videoUrl: "https://youtu.be/H0kroq75n3g?feature=shared"
  }
];

export const getAuthorsByCountry = (country: string): Author[] => {
  return authors.filter(author => author.country === country);
};

export const countryFlags: Record<string, string> = {
  "Argentina": "🇦🇷",
  "Bolivia": "🇧🇴", 
  "Brasil": "🇧🇷",
  "Cuba": "🇨🇺",
  "México": "🇲🇽",
  "Perú": "🇵🇪",
  "Venezuela": "🇻🇪"
};