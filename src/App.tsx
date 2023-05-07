import "./App.css";
import { useState } from "react";

import ThemeCustom from "./theme/themeCustom";
import ThemeContext, {
  Theme_colorBackground_Dark,
  Theme_type_colorBackground_light,
  Style_Theme,
  Theme,
} from "./theme/themeBackground";

import { RouterProvider } from "react-router-dom";

import { store } from "./store/store";
import { Provider } from "react-redux";

import { router } from "./router/Router";
import "./locales/i18n";

import { createGlobalStyle } from "styled-components";

function App() {
  const Style_theme_Select = localStorage.getItem("Theme_type");
  const [themeColor, setThemeColor] = useState<Style_Theme>(
    Style_theme_Select === "Light"
      ? Theme_type_colorBackground_light
      : Theme_colorBackground_Dark
  );
  const defaultTheme: Theme = {
    theme: themeColor,
    toggleTheme: (type: string) => {
      if (type === "Light") {
        setThemeColor(Theme_type_colorBackground_light);
      } else {
        setThemeColor(Theme_colorBackground_Dark);
      }
    },
  };
  const GlobalStyle = createGlobalStyle`
    html {
      background-color: ${
        Style_theme_Select === "Dark"
          ? Theme_colorBackground_Dark.main
          : Theme_type_colorBackground_light.main
      };
    }
  `;

  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={defaultTheme}>
          <ThemeCustom>
            <GlobalStyle />
            <RouterProvider router={router} />
          </ThemeCustom>
        </ThemeContext.Provider>
      </Provider>
    </>
  );
}

export default App;
