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
    id: "kusch",
    name: "Rodolfo Kusch",
    country: "Argentina",
    birth: "1922",
    death: "1979",
    mainContribution: "Desarrolló una filosofía latinoamericana basada en el pensamiento indígena y popular.",
    keyPhrase: "Vivir es una condición atávica condicionada por milenios de vida de la humanidad, pero que no conocemos.",
    concept: "Pensamiento indígena y popular vs. racionalidad occidental.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
  },
  {
    id: "sarmiento",
    name: "Domingo Faustino Sarmiento",
    country: "Argentina", 
    birth: "1811",
    death: "1888",
    mainContribution: "Padre del aula argentino, promotor de la educación pública y laica. Fundó 800 escuelas durante su presidencia.",
    keyPhrase: "Sin educación democrática, no hay democracia real.",
    concept: "Educación como pilar fundamental del progreso social y la transformación nacional.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
  },
  {
    id: "rivera",
    name: "Silvia Rivera Cusicanqui",
    country: "Bolivia",
    birth: "1949",
    death: "Actualidad",
    mainContribution: "Sociología descolonial; introdujo el concepto de ch'ixi para describir identidades híbridas en América Latina.",
    keyPhrase: "Nada sería posible si la gente no deseara lo imposible.",
    concept: "Descolonización, identidad ch'ixi y crítica al multiculturalismo superficial.",
    image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
  },
  {
    id: "quijano",
    name: "Aníbal Quijano",
    country: "Perú",
    birth: "1928",
    death: "2018",
    mainContribution: "Creó los conceptos de colonialidad del poder y eurocentrismo para explicar la dominación racial y económica.",
    keyPhrase: "Es tiempo de aprender a liberarnos del espejo eurocéntrico donde nuestra imagen es siempre, necesariamente, distorsionada.",
    concept: "Colonialidad del poder y racismo estructural.",
    image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
  },
  {
    id: "mariategui",
    name: "José Carlos Mariátegui",
    country: "Perú",
    birth: "1894",
    death: "1930",
    mainContribution: "Intelectual marxista que propuso una educación socialista basada en la realidad indígena y campesina del Perú.",
    keyPhrase: "El problema del indio es el problema de la tierra.",
    concept: "Educación crítica y transformadora, enraizada en las condiciones sociales de América Latina.",
    image: "https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
  },
  {
    id: "freire",
    name: "Paulo Freire",
    country: "Brasil",
    birth: "1921",
    death: "1997",
    mainContribution: "Creó la Pedagogía del Oprimido, promoviendo una educación crítica y liberadora.",
    keyPhrase: "La educación no cambia el mundo, cambia a las personas que van a cambiar el mundo.",
    concept: "Educación emancipadora y conciencia crítica.",
    image: "https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
  },
  {
    id: "teixeira",
    name: "Anísio Teixeira",
    country: "Brasil",
    birth: "1900",
    death: "1971",
    mainContribution: "Impulsor de la educación pública en Brasil y de la Escuela Nueva, basada en la enseñanza democrática.",
    keyPhrase: "Sin educación democrática, no hay democracia real.",
    concept: "Democratización de la educación.",
    image: "https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
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
    image: "https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
  },
  {
    id: "demo",
    name: "Pedro Demo",
    country: "Brasil",
    birth: "1941",
    death: "2023",
    mainContribution: "Destacó la importancia de la educación con investigación y pensamiento crítico, superando la memorización mecánica.",
    keyPhrase: "No hay ciudadanía sin educación de calidad.",
    concept: "Investigación educativa, calidad y ciudadanía crítica.",
    image: "https://images.pexels.com/photos/3184346/pexels-photo-3184346.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
  },
  {
    id: "marti",
    name: "José Martí",
    country: "Cuba",
    birth: "1853",
    death: "1895",
    mainContribution: "Defendió una educación humanista, crítica y al servicio de la justicia social.",
    keyPhrase: "Ser culto es el único modo de ser libre.",
    concept: "Educación como herramienta de emancipación y construcción de ciudadanía.",
    image: "https://images.pexels.com/photos/3184347/pexels-photo-3184347.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
  },
  {
    id: "vasconcelos",
    name: "José Vasconcelos",
    country: "México",
    birth: "1882",
    death: "1959",
    mainContribution: "Promotor de la educación pública en México tras la Revolución; impulsó campaña masiva de alfabetización.",
    keyPhrase: "Por mi raza hablará el espíritu.",
    concept: "Educación humanista e integradora, que revaloriza la identidad cultural latinoamericana.",
    image: "https://images.pexels.com/photos/3184348/pexels-photo-3184348.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
  },
  {
    id: "rodriguez",
    name: "Simón Rodríguez",
    country: "Venezuela",
    birth: "1769",
    death: "1854",
    mainContribution: "Maestro de Simón Bolívar, propuso una educación popular, inclusiva y original, adaptada a la realidad latinoamericana.",
    keyPhrase: "O inventamos o erramos.",
    concept: "Educación emancipadora y autóctona, alejada del modelo europeo.",
    image: "https://images.pexels.com/photos/3184349/pexels-photo-3184349.jpeg?auto=compress&cs=tinysrgb&w=400",
    videoUrl: "https://www.youtube.com/watch?v=PpESi8KC3YU&list=RDPpESi8KC3YU&start_radio=1"
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