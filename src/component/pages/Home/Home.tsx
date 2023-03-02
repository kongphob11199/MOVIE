import * as React from "react";
import "./Home.css";
import { Helmet } from "react-helmet";

import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { color } from "../../../theme/Color";

import { useAppDispatch } from "../../../store/store";
import {
  setColor_primary,
  setColor_secondary,
} from "../../../store/slices/ThemeSlices";

import NavVertical from "../../navbar/navVertical";
import NavHorizontal from "../../navbar/navHorizontal/navHorizontal";

import ThemeContext from "../../../theme/themeBackground";
import Sentting from "../../sentting";
import SenttingList from "../../sentting/senttingList";
type HomeProps = {
  //
};
type Anchor = "left" | "right";
const Home: React.FC<any> = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  const Change_Lang = (lang: string) => {
    changeLanguage(lang);
    localStorage.setItem("lng", lang);
  };

  const [NavHome, setNavHome] = React.useState<boolean>(false);
  const [NavHome_posi, setNavHome_posi] = React.useState<Anchor>("left");

  const toggleDrawer = (open: boolean, posi?: Anchor) => () => {
    if (posi) {
      setNavHome_posi(posi);
    }
    setNavHome(open);
  };

  const setClose = () => {
    setNavHome(false);
  };

  const dispatch = useAppDispatch();
  const setColor_primaryNav = (color: object, name_color: string) => {
    dispatch(setColor_primary(color));
    localStorage.setItem("color_primary", name_color);
  };
  const setColor_secondaryNav = (color: object, name_color: string) => {
    dispatch(setColor_secondary(color));
    localStorage.setItem("color_secondary", name_color);
  };
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);
  const setThemeNav = (type: string) => {
    toggleTheme(type);
    localStorage.setItem("Theme_type", type);
  };

  const Style_Home: object = {
    backgroundColor: theme.main,
    color: theme.color_Text,
    transition: "0.2s ease-in-out",
  };

  const handleOnWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // console.log(e.deltaY);
    // console.log("onWheel: scrolling the list...");
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div
        className="Home"
        style={Style_Home}
        onWheel={(e: React.WheelEvent<HTMLDivElement>) => handleOnWheel(e)}
      >
        <NavHorizontal />
        <Button onClick={toggleDrawer(true, "left")}>{"left"}</Button>
        <SwipeableDrawer
          anchor={NavHome_posi}
          open={NavHome}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {NavHome_posi === "left" ? (
            <NavVertical setNavHome={setClose} />
          ) : (
            <SenttingList setNavHome={setClose} />
          )}
        </SwipeableDrawer>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setColor_primaryNav(color.indigo, "indigo");
          }}
        >
          indigo
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setColor_primaryNav(color.green, "green");
          }}
        >
          green
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setColor_primaryNav(color.red, "red");
          }}
        >
          red
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setColor_secondaryNav(color.deepOrange, "deepOrange");
          }}
        >
          red
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setColor_secondaryNav(color.cyan, "cyan");
          }}
        >
          red
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setThemeNav("Light");
          }}
        >
          theme_light
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setThemeNav("Dark");
          }}
        >
          theme_Dark
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            Change_Lang("en");
          }}
        >
          {t("register")}
        </Button>

        <Box className="Box_Sentting">
          <div onClick={toggleDrawer(true, "right")}>
            <Sentting />
          </div>
        </Box>
      </div>
    </>
  );
};

export default Home;
