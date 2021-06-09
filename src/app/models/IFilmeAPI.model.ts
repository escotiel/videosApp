/**
 * Dados obtidos da API do site themoviesdb -> https://developers.themoviedb.org/3/search/search-movies
 */

/*Desativa o naming-convention do eslintpara deixar os dados do objeto iguais aos requeridos pela API do themoviedb (usando o _ )*/

/* eslint-disable @typescript-eslint/naming-convention*/

export interface IFilmeApi{ /*o ? indica que os dados que são opcionais */
  poster_path?: string;
  adult?: string;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}


export interface IListaFilmes{
  page: number;
  results: IFilmeApi[];
  total_results: number;
  total_pages: number;
}
