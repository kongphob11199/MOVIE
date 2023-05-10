import * as React from "react";
import "./navHorizontal.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Button, Stack } from "@mui/material";
import ThemeContext from "../../../theme/themeBackground";
// icon
import MenuIcon from "@mui/icons-material/Menu";
import { ReactSVG } from "react-svg";
import SearchIcon from "../../../assets/icon/search-magnifying-glass-svgrepo-com.svg";

// redux
import { useAppDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import {
  MoviesSelector,
  SearchData_Movies,
  setDataSearch_Movies,
} from "../../../store/slices/MovieSlices";
import { PagesSelector } from "../../../store/slices/PagesSlices";
import NavHor_Seacrh from "./navHor_Seacrh/NavHor_Seacrh";

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

  const dispatch = useAppDispatch();
  const LanguageCurrent = useSelector(PagesSelector);
  const dataMovies = useSelector(MoviesSelector);

  const [inputSearch, setInputSearch] = React.useState<string>("");

  React.useEffect(() => {
    if (inputSearch.length >= 3) {
      dispatch(SearchData_Movies(LanguageCurrent.API_Movie, inputSearch));
    } else {
      dispatch(setDataSearch_Movies([]));
    }
  }, [inputSearch]);

  const setClear_Search = () => {
    setInputSearch("");
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
          <Box
            sx={{ cursor: "pointer", mr: "1rem" }}
            onClick={() => Navigate("/")}
          >
            {t("Home")}
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.secondary_navHori,
            color: theme.color_Text,
          }}
          className="NavHor_inputSearch"
        >
          <ReactSVG src={SearchIcon} className="icon_search" />
          <input
            style={{
              backgroundColor: theme.secondary_navHori,
              color: theme.color_Text,
            }}
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder={t("search_placeholder") as string}
          />
        </Box>
      </Box>
      {inputSearch !== "" && dataMovies.dataSearch_Movies[0] && (
        <NavHor_Seacrh
          dataMovie_Search={dataMovies.dataSearch_Movies}
          setClear_Search={setClear_Search}
        />
      )}
    </>
  );
};

export default NavHorizontal;
