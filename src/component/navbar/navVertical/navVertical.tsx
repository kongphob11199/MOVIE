import React, { useState } from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ThemeContext from "../../../theme/themeBackground";
// icon
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import NavListItem from "./navListItem";

type NavVertical = {
  setNavHome: () => void;
};
const NavVertical: React.FC<any> = ({ setNavHome }: NavVertical) => {
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);
  const [menuShow_Close, setMenuShow_Close] = useState<boolean>(false);
  const Menu_MouseEnter = () => {
    setMenuShow_Close(true);
  };
  const Menu_MouseLeave = () => {
    setMenuShow_Close(false);
  };
  return (
    <>
      <Box
        sx={{
          width: 250,
          height: "100vh",
          backgroundColor: theme.main,
          color: theme.color_Text,
        }}
        role="presentation"
        onClick={setNavHome}
        onKeyDown={setNavHome}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 10px 0 25px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ m: "0", fontWeight: "600" }}
          >
            Menu
          </Typography>
          <Box
            onMouseEnter={() => {
              Menu_MouseEnter();
            }}
            onMouseLeave={() => {
              Menu_MouseLeave();
            }}
            onClick={setNavHome}
          >
            <ArrowBackIosNewIcon sx={{ color: theme.color_Text }} />

            {menuShow_Close && (
              <ArrowBackIosNewIcon
                sx={{
                  color: theme.color_Text,
                  marginLeft: "-15px",
                }}
              />
            )}

            {menuShow_Close && (
              <ArrowBackIosNewIcon
                sx={{
                  color: theme.color_Text,
                  marginLeft: "-15px",
                }}
              />
            )}
          </Box>
        </Box>
        <Divider />
        <NavListItem />
      </Box>
    </>
  );
};

export default NavVertical;
