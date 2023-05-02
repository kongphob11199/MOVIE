import * as React from "react";
import "./navHorizontal.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Button, Stack } from "@mui/material";
import ThemeContext from "../../../theme/themeBackground";
// icon
import MenuIcon from "@mui/icons-material/Menu";

type NavHorizontalProps = {
  toggleDrawerLeft: () => void;
};

const NavHorizontal: React.FC<any> = ({
  toggleDrawerLeft,
}: NavHorizontalProps) => {
  const Navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);
  const Style_NavHori: object = {
    backgroundColor: theme.main_navHori,
    p: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const Style_NavHori_Box: object = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <>
      <Box sx={Style_NavHori}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ mr: "1rem" }} onClick={() => toggleDrawerLeft()}>
            <MenuIcon />
          </Box>
          <Box sx={{ cursor: "pointer" }} onClick={() => Navigate("/")}>
            NavHorizontal
          </Box>
        </Box>
        {/* <Box sx={Style_NavHori_Box}> */}
        <Stack direction="row" spacing={2} sx={Style_NavHori_Box}>
          {/* <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: "600",
              // textTransform: "none"
            }}
          >
            {t("login")}
          </Button> */}
        </Stack>
        {/* </Box> */}
      </Box>
    </>
  );
};

export default NavHorizontal;
