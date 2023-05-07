import React, { useState } from "react";
import "./layoutTheme.css";
import { useTranslation } from "react-i18next";

import { Box, Button } from "@mui/material";
import ThemeContext from "../../../theme/themeBackground";
// icon
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

// redux
import { useAppDispatch } from "../../../store/store";
import { setLanguage } from "../../../store/slices/PagesSlices";

type Props = {};

const LayoutLanguage: React.FC<any> = (props: Props) => {
  const { t, i18n } = useTranslation();
  // const changeLanguage = (lng: any) => {
  //   i18n.changeLanguage(lng);
  // };
  const dispatch = useAppDispatch();
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);

  const Change_Lang = (lang: string) => {
    dispatch(setLanguage(lang));
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
            {t("senttingLanguage")}
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
                Change_Lang("en");
              }}
              variant="contained"
              sx={{ width: "45%", fontWeight: "600" }}
            >
              England
              {/* {t("senttingLanguage_England")} */}
            </Button>
            <Button
              onClick={() => {
                Change_Lang("th");
              }}
              variant="contained"
              sx={{ width: "45%", fontWeight: "600" }}
            >
              ไทย
              {/* {t("senttingLanguage_Thai")} */}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LayoutLanguage;
