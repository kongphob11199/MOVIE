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
export interface Movies_popular {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface MoviesState {
  Movies_popular: MoviesArray<Movies_popular>;
  Movies_popular_ShowOne: Movies_popular;
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
  },
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
