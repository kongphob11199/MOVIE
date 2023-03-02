import React from "react";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { color } from "./Color";

import { useSelector } from "react-redux";
import { ThemeSelector } from "../store/slices/ThemeSlices";
import ThemeBackground from "./themeBackground";

type Props = {
  children: any;
};

const ThemeCustom: React.FC<any> = ({ children }: Props) => {
  const colorSelect = useSelector(ThemeSelector);
  const color_old_primary: string | any = localStorage.getItem("color_primary");
  const color_old_secondary: string | any =
    localStorage.getItem("color_secondary");
  const [color_set_primary, setColor_set_primary] = React.useState<object>({});
  const [color_set_secondary, setColor_set_secondary] = React.useState<object>(
    {}
  );

  const colorChange = (
    color_old: string,
    setColor_set: React.Dispatch<React.SetStateAction<object>>
  ) => {
    if (color_old === "red") {
      setColor_set(color.red);
    } else if (color_old === "indigo") {
      setColor_set(color.indigo);
    } else if (color_old === "green") {
      setColor_set(color.green);
    } else if (color_old === "deepPurple") {
      setColor_set(color.deepPurple);
    } else if (color_old === "teal") {
      setColor_set(color.teal);
    } else if (color_old === "yellow") {
      setColor_set(color.yellow);
    } else if (color_old === "cyan") {
      setColor_set(color.cyan);
    } else if (color_old === "grey") {
      setColor_set(color.grey);
    } else if (color_old === "deepOrange") {
      setColor_set(color.deepOrange);
    } else {
      setColor_set(color.blue);
    }
  };
  React.useEffect(() => {
    colorChange(color_old_primary, setColor_set_primary);
    colorChange(color_old_secondary, setColor_set_secondary);
  }, [colorSelect, color_old_primary, color_old_secondary]);

  let theme = createTheme({
    typography: {
      fontFamily:
        "Fira Sans ital, Noto Sans Thai, Inter, system-ui, Avenir,Helvetica, Arial, sans-serif",
    },
    palette: {
      primary:
        Object.keys(colorSelect.color_primary).length !== 0 ||
        Object.keys(color_set_primary).length !== 0
          ? color_set_primary
          : color.grey,
      secondary:
        Object.keys(colorSelect.color_secondary).length !== 0 ||
        Object.keys(color_set_secondary).length !== 0
          ? color_set_secondary
          : color.grey,
    },
  });
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
export default ThemeCustom;
