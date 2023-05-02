import React from "react";

import ThemeContext from "../../../theme/themeBackground";

// redux
import { useSelector } from "react-redux";
import { PagesSelector } from "../../../store/slices/PagesSlices";

import "./animationLoad.css";

type Loading_logoProps = {
  height: string;
};

const Loading_logo: React.FC<any> = ({ height }: Loading_logoProps) => {
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);
  const backgroundoverlay = {
    backgroundImage: `linear-gradient(rgb(0, 0, 0, 0), ${theme.main})`,
  };
  const style_height = {
    height: height,
    // maxHeight: height,
  };
  const LanguageCurrent = useSelector(PagesSelector);
  const logo = LanguageCurrent.LogoPage;

  return (
    <>
      <div
        className="HomePage_First_Wallpaper_Loading"
        style={{ ...style_height }}
      >
        <div className="logo_load">
          <img src={logo} style={{ width: "80px", height: "80px" }} />
        </div>
        <div className="loader-circles"></div>
        <div
          className="HomePage_First_Wallpaper_overlay"
          style={{ ...backgroundoverlay }}
        ></div>
      </div>
    </>
  );
};

export default Loading_logo;
