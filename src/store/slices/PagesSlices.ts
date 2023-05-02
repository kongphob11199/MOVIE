import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import logo from "../../assets/logo/leaf-svgrepo-com.png";
// เปลี่ยนภาษา
import i18n from "i18next";

export type PagesState = {
  Pages_Show: number;
  LanguageCurrent: string;
  API_Movie: string;
  LogoPage: string;
};

const initialValues: PagesState = {
  Pages_Show: 1,
  LanguageCurrent: "en",
  API_Movie: "",
  LogoPage: logo,
};

const PagesSlice = createSlice({
  name: "Pages",
  initialState: initialValues,
  reducers: {
    setPages_Show: (state: PagesState, action: PayloadAction<number>) => {
      state.Pages_Show = action.payload;
    },
    setLanguageCurrent: (state: PagesState, action: PayloadAction<string>) => {
      state.LanguageCurrent = action.payload;
    },
    setAPI_Movie: (state: PagesState, action: PayloadAction<string>) => {
      state.API_Movie = action.payload;
    },
  },
});

export const { setPages_Show, setLanguageCurrent, setAPI_Movie } =
  PagesSlice.actions;
export const PagesSelector = (store: RootState) => store.PagesReducer;

export function scrollSetPages_Show(
  numPagesCurrent: number,
  scrollMouse: number
) {
  return async (dispatch: any) => {
    if (scrollMouse === 100 && numPagesCurrent < 4) {
      dispatch(PagesSlice.actions.setPages_Show(numPagesCurrent + 1));
    } else if (scrollMouse === -100 && numPagesCurrent > 1) {
      dispatch(PagesSlice.actions.setPages_Show(numPagesCurrent - 1));
    }
  };
}

export function setLanguage(lng: string | any) {
  return async (dispatch: any) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    dispatch(setLanguageCurrent(lng));
    if (lng === "en") {
      dispatch(setAPI_Movie("en-US"));
    } else {
      dispatch(setAPI_Movie("th-TH"));
    }
  };
}

export default PagesSlice.reducer;
