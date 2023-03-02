import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {Theme_colorBackground_Dark,Theme_type_colorBackground_light} from "../../theme/themeBackground"

type ThemeState = {
  color_primary: object
  color_secondary: object
  type_Theme:string
  change_Theme: object

};

const initialValues: ThemeState = {
  color_primary:{},
  color_secondary:{},
  type_Theme:"Dark",
  change_Theme:Theme_colorBackground_Dark,

};


const ThemeSlice = createSlice({
  name: "Theme",
  initialState: initialValues,
  reducers: {
    setColor_primary: (state: ThemeState, action: PayloadAction<object>) => {
      state.color_primary = action.payload
    },
    setColor_secondary: (state: ThemeState, action: PayloadAction<object>) => {
      state.color_secondary = action.payload
    },
    setTheme: (state: ThemeState, action: PayloadAction<string>) => {
      state.type_Theme = action.payload
    },
    changeTheme: (state: ThemeState, action: PayloadAction<object>) => {
      state.change_Theme = action.payload
    },
  },
});

export function getTheme(type_Theme:string) {
  return async (dispatch:any) => {
      if (type_Theme === "Dark") {
        dispatch(ThemeSlice.actions.changeTheme(Theme_colorBackground_Dark));
      }else{
        dispatch(ThemeSlice.actions.changeTheme(Theme_type_colorBackground_light));
      }
  };
}

export const { setColor_primary,setColor_secondary,setTheme,changeTheme } = ThemeSlice.actions;
export const ThemeSelector = (store: RootState) => store.ThemeReducer;
export default ThemeSlice.reducer;
