/**
 * Dados obtidos da API do site themoviesdb -> https://developers.themoviedb.org/3/search/search-tv-shows
 */

/*Desativa o naming-convention do eslintpara deixar os dados do objeto iguais aos requeridos pela API do themoviedb (usando o _ )*/

/* eslint-disable @typescript-eslint/naming-convention*/

export interface ISeriesApi{ /*o ? indica que os dados que são opcionais */
  poster_path?: string;
  popularity?: number;
  id?: number;
  backdrop_path?: string;
  vote_average?: number;
  overview?: string;
  first_air_date?: string;
  origin_country?: string[];
  genre_ids?: number[];
  original_language?: string;
  vote_count?: number;
  name?: string;
  original_name?: string;
}


export interface IListaSeries{
  page: number;
  results: ISeriesApi[];
  total_results: number;
  total_pages: number;
}
