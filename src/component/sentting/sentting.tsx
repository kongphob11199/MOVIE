import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ThemeContext from "../../theme/themeBackground";
import "./sentting.css";
// icon
import SettingsIcon from "@mui/icons-material/Settings";
type SenttingProps = {
  //
};

const Sentting: React.FC<any> = () => {
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);

  const [Stlye_BoxSetting, setStlye_BoxSetting] = useState<any>(
    theme.main_navHori
  );
  const MouseOverSetting = () => {
    setStlye_BoxSetting(theme.main_navHori_Hover);
  };
  const MouseOutSetting = () => {
    setStlye_BoxSetting(theme.main_navHori);
  };
  useEffect(() => {
    MouseOverSetting();
    MouseOutSetting();
  }, [theme]);

  return (
    <>
      <div
        className="Box_Sentting_Button"
        style={{
          backgroundColor: Stlye_BoxSetting,

          color: theme.color_Text,
          // textTransform: "none"
        }}
        onMouseOver={() => {
          MouseOverSetting();
        }}
        onMouseOut={() => {
          MouseOutSetting();
        }}
      >
        <SettingsIcon
          sx={{
            fontSize: 30,
          }}
          className="NavHori_IconSetting"
        />
      </div>
    </>
  );
};

export default Sentting;
