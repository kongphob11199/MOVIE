export const path_API: string = "https://api.themoviedb.org/3/";

export const api_key: string = "?api_key=4e44d9029b1270a757cddc766a1bcb63";

export const api_lang: string = "&language=";

interface typeMovie {
  popular: string;
  top_rated: string;
  upcoming: string;
}
export const path_typeMovie: typeMovie = {
  popular: "popular",
  top_rated: "top_rated",
  upcoming: "upcoming",
};

export const path_Movie: string = `${path_API}movie/`;
export const path_Movie_img: string = `https://image.tmdb.org/t/p/original`;
