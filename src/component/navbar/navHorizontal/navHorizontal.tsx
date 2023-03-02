import * as React from "react";
import "./navHorizontal.css";
import { useTranslation } from "react-i18next";

import { Box, Button, Stack } from "@mui/material";
import ThemeContext from "../../../theme/themeBackground";

type NavHorizontalProps = {
  //
};

const NavHorizontal: React.FC<any> = () => {
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
        <Box>NavHorizontal</Box>
        {/* <Box sx={Style_NavHori_Box}> */}
        <Stack direction="row" spacing={2} sx={Style_NavHori_Box}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontWeight: "600",
              // textTransform: "none"
            }}
          >
            {t("login")}
          </Button>
        </Stack>
        {/* </Box> */}
      </Box>
    </>
  );
};

export default NavHorizontal;
