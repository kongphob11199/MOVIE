import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ThemeContext from "../../theme/themeBackground";
// icon
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import LayoutColor from "./layout/layoutColor";
import LayoutTheme from "./layout/layoutTheme";
import LayoutLanguage from "./layout/layoutLanguage";

type SenttingList = {
  setNavHome: () => void;
};

const SenttingList: React.FC<any> = ({ setNavHome }: SenttingList) => {
  const { t, i18n } = useTranslation();
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
        // onClick={setNavHome}
        // onKeyDown={setNavHome}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 10px 10px 25px",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ m: "0", fontWeight: "600" }}
          >
            {t("sentting")}
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
            <ArrowForwardIosIcon sx={{ color: theme.color_Text }} />

            {menuShow_Close && (
              <ArrowForwardIosIcon
                sx={{
                  color: theme.color_Text,
                  marginLeft: "-15px",
                }}
              />
            )}

            {menuShow_Close && (
              <ArrowForwardIosIcon
                sx={{
                  color: theme.color_Text,
                  marginLeft: "-15px",
                }}
              />
            )}
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            padding: "10px 10px 0 25px",
          }}
        >
          <LayoutColor />
          <LayoutTheme />
          <LayoutLanguage />
        </Box>
      </Box>
    </>
  );
};

export default SenttingList;
