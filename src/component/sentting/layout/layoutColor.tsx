import React, { useEffect, useState } from "react";
import "./layoutColor.css";
import { useTranslation } from "react-i18next";

import { Box, Button, Stack, Tooltip } from "@mui/material";
import ThemeContext from "../../../theme/themeBackground";
// icon
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useAppDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import {
  setColor_primary,
  setColor_secondary,
  ThemeSelector,
} from "../../../store/slices/ThemeSlices";

import { color } from "../../../theme/Color";

type Props = {};
type ThemeState = {
  color_primary: object;
  color_secondary: object;
  type_Theme: string;
  change_Theme: object;
};
const LayoutColor: React.FC<any> = (props: Props) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const colorCodeName = [
    {
      ColorName: `${t("color_deepPurple")}`,
      ColorName_local: `deepPurple`,
      ColorCode: "#673ab7",
      Color_Ob: color.deepPurple,
    },
    {
      ColorName: `${t("color_indigo")}`,
      ColorName_local: `indigo`,
      ColorCode: "#3f51b5",
      Color_Ob: color.indigo,
    },
    {
      ColorName: `${t("color_blue")}`,
      ColorName_local: `blue`,
      ColorCode: "#2196f3",
      Color_Ob: color.blue,
    },
    {
      ColorName: `${t("color_cyan")}`,
      ColorName_local: `cyan`,
      ColorCode: "#00bcd4",
      Color_Ob: color.cyan,
    },
    {
      ColorName: `${t("color_teal")}`,
      ColorName_local: `teal`,
      ColorCode: "#009688",
      Color_Ob: color.teal,
    },
    {
      ColorName: `${t("color_green")}`,
      ColorName_local: `green`,
      ColorCode: "#4caf50",
      Color_Ob: color.green,
    },
    {
      ColorName: `${t("color_yellow")}`,
      ColorName_local: `yellow`,
      ColorCode: "#ffeb3b",
      Color_Ob: color.yellow,
    },
    {
      ColorName: `${t("color_deepOrange")}`,
      ColorName_local: `deepOrange`,
      ColorCode: "#ff5722",
      Color_Ob: color.deepOrange,
    },
    {
      ColorName: `${t("color_red")}`,
      ColorName_local: `red`,
      ColorCode: "#f44336",
      Color_Ob: color.red,
    },
    {
      ColorName: `${t("color_grey")}`,
      ColorName_local: `grey`,
      ColorCode: "#9e9e9e",
      Color_Ob: color.grey,
    },
  ];
  const Style_colorCodeName_false = {
    border: `0.5px solid ${theme.color_Text}`,
  };
  const Style_colorCodeName_true = {
    border: `0.5px solid #FF5733`,
  };
  const color_mainORsecondary = useSelector(ThemeSelector);

  const setColor_primaryNav = (color: object, name_color: string) => {
    dispatch(setColor_primary(color));
    localStorage.setItem("color_primary", name_color);
  };
  const setColor_secondaryNav = (color: object, name_color: string) => {
    dispatch(setColor_secondary(color));
    localStorage.setItem("color_secondary", name_color);
  };
  const color_old_primary: string | any = localStorage.getItem("color_primary");
  const color_old_secondary: string | any =
    localStorage.getItem("color_secondary");
  const [check_ColorMain, setCheck_ColorMain] = useState<boolean>(false);
  const [check_ColorSecondary, setCheck_ColorSecondary] =
    useState<boolean>(false);
  const check_Color = (
    check: boolean,
    setCheck: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (check) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  useEffect(() => {}, [color_mainORsecondary]);

  return (
    <>
      <Box>
        <Box>
          <Box
            className="setting_Box_Color"
            sx={{
              backgroundColor: theme.main_navHori,
              m: "0",
              fontWeight: "600",
              p: "10px",
            }}
          >
            {t("senttingColor")}
          </Box>
        </Box>
        <Box>
          <Box
            className="setting_Box_Color_Content"
            onClick={() => {
              check_Color(check_ColorMain, setCheck_ColorMain);
            }}
            sx={{ mt: "15px" }}
          >
            <Box>{t("senttingColorsMain")}</Box>
            <Box>
              {!check_ColorMain ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Box>
          </Box>
          {check_ColorMain && (
            <Stack
              direction={"row"}
              spacing={0}
              sx={{ mt: "5px", flexWrap: "wrap", gap: 1 }}
            >
              {colorCodeName.map((item) => {
                return (
                  <Tooltip
                    key={item.ColorName}
                    title={item.ColorName}
                    arrow
                    placement="top"
                  >
                    {color_old_primary !== item.ColorName_local ? (
                      <Box
                        onClick={() => {
                          setColor_primaryNav(
                            item.Color_Ob,
                            item.ColorName_local
                          );
                        }}
                        className="Box_ChangeColor"
                        sx={{
                          ...Style_colorCodeName_false,
                          backgroundColor: item.ColorCode,
                        }}
                      />
                    ) : (
                      <Box
                        onClick={() => {
                          setColor_primaryNav(
                            item.Color_Ob,
                            item.ColorName_local
                          );
                        }}
                        className="Box_ChangeColor"
                        sx={{
                          ...Style_colorCodeName_true,
                          backgroundColor: item.ColorCode,
                        }}
                      />
                    )}
                  </Tooltip>
                );
              })}
            </Stack>
          )}
          <Box
            className="setting_Box_Color_Content"
            onClick={() => {
              check_Color(check_ColorSecondary, setCheck_ColorSecondary);
            }}
            sx={{ mt: "15px" }}
          >
            <Box>{t("senttingColorsSecon")}</Box>
            <Box>
              {!check_ColorSecondary ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Box>
          </Box>
          {check_ColorSecondary && (
            <Stack
              direction={"row"}
              spacing={0}
              sx={{ mt: "5px", flexWrap: "wrap", gap: 1 }}
            >
              {colorCodeName.map((item) => {
                return (
                  <Tooltip
                    key={item.ColorName}
                    title={item.ColorName}
                    arrow
                    placement="top"
                  >
                    {color_old_secondary !== item.ColorName_local ? (
                      <Box
                        onClick={() => {
                          setColor_secondaryNav(
                            item.Color_Ob,
                            item.ColorName_local
                          );
                        }}
                        className="Box_ChangeColor"
                        sx={{
                          ...Style_colorCodeName_false,
                          backgroundColor: item.ColorCode,
                        }}
                      />
                    ) : (
                      <Box
                        onClick={() => {
                          setColor_secondaryNav(
                            item.Color_Ob,
                            item.ColorName_local
                          );
                        }}
                        className="Box_ChangeColor"
                        sx={{
                          ...Style_colorCodeName_true,
                          backgroundColor: item.ColorCode,
                        }}
                      />
                    )}
                  </Tooltip>
                );
              })}
            </Stack>
          )}
        </Box>
      </Box>
    </>
  );
};

export default LayoutColor;
