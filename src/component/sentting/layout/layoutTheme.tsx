import React, { useState } from "react";
import "./layoutTheme.css";
import { useTranslation } from "react-i18next";

import { Box, Button } from "@mui/material";
import ThemeContext from "../../../theme/themeBackground";
// icon
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

type Props = {};

const LayoutTheme: React.FC<any> = (props: Props) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);

  const setThemeNav = (type: string) => {
    toggleTheme(type);
    localStorage.setItem("Theme_type", type);
  };
  const Style_Button_ChangeThme_Light = {
    width: "45%",
    backgroundColor: "#DFDCEB",
    color: "#08091A",
    "&:hover": {
      backgroundColor: "#5A5571",
      color: "#FFFFFF",
    },
  };
  const Style_Button_ChangeThme_Dark = {
    width: "45%",
    backgroundColor: "#393648",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#23212C",
    },
  };

  return (
    <>
      <Box>
        <Box>
          <Box
            className="setting_Box_Theme"
            sx={{
              backgroundColor: theme.main_navHori,
              mt: "24px",
              fontWeight: "600",
              p: "10px",
            }}
          >
            {t("senttingTheme")}
          </Box>
        </Box>
        <Box>
          <Box
            className="setting_Box_Theme_Content"
            // onClick={() => {
            //   check_SetTheme(check_Theme, setCheck_ColorMain);
            // }}
            sx={{ mt: "15px" }}
          >
            <Button
              onClick={() => {
                setThemeNav("Light");
              }}
              variant="contained"
              sx={Style_Button_ChangeThme_Light}
              startIcon={<LightModeIcon className="Button_Theme_Chagne" />}
            >
              {t("senttingTheme_Light")}
            </Button>
            <Button
              onClick={() => {
                setThemeNav("Dark");
              }}
              variant="contained"
              sx={Style_Button_ChangeThme_Dark}
              startIcon={<DarkModeIcon className="Button_Theme_Chagne" />}
            >
              {t("senttingTheme_Dark")}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LayoutTheme;
