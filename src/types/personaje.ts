export interface Personaje {
  _id: number;
  name: string;
  imageUrl?: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
}

export interface RespuestaApi {
  info: {
    count: number;
    totalPages: number;
  };
  data: Personaje | Personaje[];
}
