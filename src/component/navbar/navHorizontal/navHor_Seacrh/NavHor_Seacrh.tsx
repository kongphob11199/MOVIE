import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// css
import "./NavHor_Seacrh.css";
import ThemeContext from "../../../../theme/themeBackground";
import { Box } from "@mui/material";

// type
import { Movies_popular } from "../../../../store/slices/MovieSlices";

// config
import { path_Movie_img } from "../../../../config";

type NavHor_SeacrhProps = {
  dataMovie_Search: Movies_popular[];
  setClear_Search: () => void;
};

const NavHor_Seacrh: React.FC<any> = ({
  dataMovie_Search,
  setClear_Search,
}: NavHor_SeacrhProps) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);
  // console.log("dataMovie_Search", dataMovie_Search);

  const Navigate = useNavigate();
  const setShow_moviedetail = (id: number) => {
    setClear_Search();
    Navigate(`/${id}`);
  };

  return (
    <>
      <div
        className={`SearchMovie_detail ${
          dataMovie_Search.length !== 0 ? "fadeIn" : "fadeOut"
        }`}
        style={{ backgroundColor: theme.main }}
      >
        <div className="SearchMovie_Card">
          {dataMovie_Search &&
            dataMovie_Search.map((item) => {
              return (
                <div
                  className="SearchMovie_Card_Content"
                  key={item.id}
                  onClick={() => setShow_moviedetail(item.id)}
                >
                  {item.backdrop_path !== null ? (
                    <div>
                      <div className="SearchMovie_Card_imgOverlay"></div>
                      <img src={`${path_Movie_img}${item.backdrop_path}`} />
                    </div>
                  ) : (
                    <div className="SearchMovie_Card_imgNull">Movie</div>
                  )}
                  <Box
                    sx={{ backgroundColor: "secondary.main" }}
                    className="title"
                  >
                    {item.title}
                  </Box>
                </div>
              );
            })}
        </div>
        <div className="SearchMovie_VM_content">{t("View_more")}</div>
      </div>
    </>
  );
};

export default NavHor_Seacrh;
