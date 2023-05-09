import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// config
import axios from "axios";
import {
  path_API,
  api_key,
  path_typeMovie,
  path_Movie,
  api_lang,
} from "../../config";

export interface MoviesArray<T> {
  [index: number]: T;
}
interface genres {
  id: number;
  name: string;
}
export interface Movies_popular {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  tagline: string;
  runtime: number;
  genres: genres[];
  imdb_id: string;
}

export interface MoviesState {
  Movies_popular: MoviesArray<Movies_popular>;
  Movies_popular_ShowOne: Movies_popular;
  Movies_top_rated: MoviesArray<Movies_popular>;
  Movies_upcoming: MoviesArray<Movies_popular>;
  Loading_wallpaper: boolean;
}

const initialValues: MoviesState = {
  Movies_popular: [],
  Movies_popular_ShowOne: {
    backdrop_path: "",
    id: 0,
    original_title: "",
    overview: "",
    poster_path: "",
    release_date: "",
    title: "",
    vote_average: 0,
    vote_count: 0,
    tagline: "",
    runtime: 0,
    genres: [],
    imdb_id: "",
  },
  Movies_top_rated: [],
  Movies_upcoming: [],
  Loading_wallpaper: false,
};

const MoviesSlice = createSlice({
  name: "Movies",
  initialState: initialValues,
  reducers: {
    setMovies_popular: (
      state: MoviesState,
      action: PayloadAction<MoviesArray<Movies_popular>>
    ) => {
      state.Movies_popular = action.payload;
    },
    setMovies_popular_ShowOne: (
      state: MoviesState,
      action: PayloadAction<Movies_popular>
    ) => {
      state.Movies_popular_ShowOne = action.payload;
    },
    setMovies_top_rated: (
      state: MoviesState,
      action: PayloadAction<MoviesArray<Movies_popular>>
    ) => {
      state.Movies_top_rated = action.payload;
    },
    setMovies_upcoming: (
      state: MoviesState,
      action: PayloadAction<MoviesArray<Movies_popular>>
    ) => {
      state.Movies_upcoming = action.payload;
    },
    setLoading_wallpaper: (
      state: MoviesState,
      action: PayloadAction<boolean>
    ) => {
      state.Loading_wallpaper = action.payload;
    },
  },
});

export const {
  setMovies_popular,
  setMovies_popular_ShowOne,
  setMovies_top_rated,
  setMovies_upcoming,
  setLoading_wallpaper,
} = MoviesSlice.actions;
export const MoviesSelector = (store: RootState) => store.MoviesReducer;
export default MoviesSlice.reducer;

export function getdataMovies_Popuplar(lng: string) {
  return async (dispatch: any) => {
    dispatch(setLoading_wallpaper(true));
    const url_lang = `${api_lang}${lng}`;
    const url = `${path_Movie}${path_typeMovie.popular}${api_key}${url_lang}`;
    await axios.get(url).then((res) => {
      dispatch(setMovies_popular(res.data.results));
      //   console.log("res", res.data.results);
    });
    dispatch(setLoading_wallpaper(false));
  };
}
export function setOneDataMovies_Popuplar(data: Movies_popular) {
  return async (dispatch: any) => {
    dispatch(setMovies_popular_ShowOne(data));
  };
}

export function getdataMovies_Top_Rated(lng: string) {
  return async (dispatch: any) => {
    dispatch(setLoading_wallpaper(true));
    const url_lang = `${api_lang}${lng}`;
    const url = `${path_Movie}${path_typeMovie.top_rated}${api_key}${url_lang}`;
    await axios.get(url).then((res) => {
      dispatch(setMovies_top_rated(res.data.results));
      //   console.log("res", res.data.results);
    });
    dispatch(setLoading_wallpaper(false));
  };
}

export function getdataMovies_Upcoming(lng: string) {
  return async (dispatch: any) => {
    dispatch(setLoading_wallpaper(true));
    const url_lang = `${api_lang}${lng}`;
    const url = `${path_Movie}${path_typeMovie.upcoming}${api_key}${url_lang}`;
    await axios.get(url).then((res) => {
      dispatch(setMovies_upcoming(res.data.results));
      //   console.log("res", res.data.results);
    });
    dispatch(setLoading_wallpaper(false));
  };
}
