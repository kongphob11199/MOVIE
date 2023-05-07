import * as React from "react";
import "./Home.css";

import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

// redux
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/store";
import {
  PagesSelector,
  PagesState,
  setLanguage,
} from "../../../store/slices/PagesSlices";

import NavVertical from "../../navbar/navVertical";
import NavHorizontal from "../../navbar/navHorizontal/navHorizontal";

import ThemeContext from "../../../theme/themeBackground";
import Sentting from "../../sentting";
import SenttingList from "../../sentting/senttingList";

// page
import PageFirst from "./Home_Page/Pages/PageFirst";

type HomeProps = {
  //
};
type Anchor = "left" | "right";
const Home: React.FC<any> = () => {
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
  const toggleDrawerLeft = () => {
    setNavHome_posi("left");
    setNavHome(true);
  };

  const { theme, toggleTheme }: any = React.useContext(ThemeContext);

  const Style_Home: object = {
    backgroundColor: theme.main,
    color: theme.color_Text,
    transition: "0.2s ease-in-out",
    height: "100%",
  };

  const local_lng = localStorage.getItem("lng");
  // console.log("local_lng", local_lng);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(setLanguage(local_lng));
  }, [0]);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="Home" style={Style_Home}>
        <NavHorizontal toggleDrawerLeft={toggleDrawerLeft} />
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

        <div>
          {/* <PageFirst /> */}
          <Outlet />
        </div>
      </div>

      <Box className="Box_Sentting">
        <div onClick={toggleDrawer(true, "right")}>
          <Sentting />
        </div>
      </Box>
    </>
  );
};

export default Home;
