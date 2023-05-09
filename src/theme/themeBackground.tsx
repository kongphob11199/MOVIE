export interface Style_Theme {
  main: string;
  main_navHori: string;
  secondary_navHori: string;
  color_Text: string;
  main_navHori_Hover: string;
  button_color: string;
  button_color_hover: string;
}
export interface themes {
  light: object;
  dark: object;
}
export interface Theme {
  theme: object;
  toggleTheme: (name_color: string) => void;
}
export const Theme_colorBackground_Dark: Style_Theme = {
  main: "#08091A",
  main_navHori: "#051A34",
  secondary_navHori: "#262b32",
  color_Text: "#FFFFFF",
  main_navHori_Hover: "#082850",
  button_color: "#393648",
  button_color_hover: "#23212C",
};

export const Theme_type_colorBackground_light: Style_Theme = {
  main: "#FFFFFF",
  main_navHori: "#CDD1E1",
  secondary_navHori: "",
  color_Text: "#08091A",
  main_navHori_Hover: "#ffffff",
  button_color: "#DFDCEB",
  button_color_hover: "#5A5571",
};

import { createContext } from "react";
export const themes: themes = {
  light: Theme_type_colorBackground_light,
  dark: Theme_colorBackground_Dark,
};

const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: (type: string) => {},
});
export default ThemeContext;
