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

function App() {
  const Style_theme_Select = localStorage.getItem("Theme_type");
  const [themeColor, setThemeColor] = useState<Style_Theme>(
    Style_theme_Select === "Dark"
      ? Theme_colorBackground_Dark
      : Theme_type_colorBackground_light
  );
  const defaultTheme: Theme = {
    theme: themeColor,
    toggleTheme: (type: string) => {
      if (type === "Dark") {
        setThemeColor(Theme_colorBackground_Dark);
      } else {
        setThemeColor(Theme_type_colorBackground_light);
      }
    },
  };
  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={defaultTheme}>
          <ThemeCustom>
            <RouterProvider router={router} />
          </ThemeCustom>
        </ThemeContext.Provider>
      </Provider>
    </>
  );
}

export default App;
