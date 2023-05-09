import * as React from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// css
import "./PageFirst.css";

// icon
import { ReactSVG } from "react-svg";
import icon_star from "../../../../../assets/logo/star-svgrepo-com.svg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

// context
import ThemeContext from "../../../../../theme/themeBackground";

// api
import { path_Movie_img } from "../../../../../config";

// redux
import { useAppDispatch } from "../../../../../store/store";
import { useSelector } from "react-redux";
import {
  PagesSelector,
  setLanguage,
} from "../../../../../store/slices/PagesSlices";
import {
  getdataMovies_Popuplar,
  getdataMovies_Top_Rated,
  getdataMovies_Upcoming,
  MoviesSelector,
  setOneDataMovies_Popuplar,
} from "../../../../../store/slices/MovieSlices";

// pages
import MovieList from "../../MoiveList/MovieList";
import Loading_logo from "../../../Loading/Loading_logo";

type PageFirstProps = {
  //
};

const PageFirst: React.FC<any> = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);
  const dispatch = useAppDispatch();

  const backgroundoverlay = {
    backgroundImage: `linear-gradient(rgb(0, 0, 0, 0), ${theme.main})`,
  };

  const [count, setCount] = React.useState<number>(0);

  const dataMovies = useSelector(MoviesSelector);

  const LanguageCurrent = useSelector(PagesSelector);

  const [firstShow, setFirstShow] = React.useState<boolean>(false);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);

      if (count === 19) {
        setCount((count) => (count = 0));
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [count]);

  const setChangeWallpaper = (status: string) => {
    if (status === "left") {
      if (count === 0) {
        setCount((count) => (count = 19));
      } else {
        setCount((count) => count - 1);
      }
    } else {
      if (count === 19) {
        setCount((count) => (count = 0));
      } else {
        setCount((count) => count + 1);
      }
    }
  };

  React.useEffect(() => {
    if (!firstShow) {
      dispatch(getdataMovies_Popuplar(LanguageCurrent.API_Movie));

      setFirstShow(true);
    }
    if (dataMovies.Movies_popular[count]) {
      dispatch(setOneDataMovies_Popuplar(dataMovies.Movies_popular[count]));
      // console.log("dataMovies.Loading_wallpaper", dataMovies.Loading_wallpaper);
    }
  }, [dataMovies, count]);

  React.useEffect(() => {
    dispatch(getdataMovies_Popuplar(LanguageCurrent.API_Movie));
    dispatch(getdataMovies_Top_Rated(LanguageCurrent.API_Movie));
    dispatch(getdataMovies_Upcoming(LanguageCurrent.API_Movie));
  }, [LanguageCurrent]);

  const Navigate = useNavigate();
  const setShow_moviedetail = (id: number) => {
    Navigate(`/${id}`);
  };

  return (
    <>
      <div>
        <div className="HomePage_First">
          {!dataMovies.Loading_wallpaper && (
            <div className="HomePage_First_Wallpaper">
              {dataMovies.Movies_popular[count] && (
                <div className="Wallpaper_Content_img">
                  <div
                    className="Wallpaper_Content_img_arrow arrow_left"
                    onClick={() => {
                      setChangeWallpaper("left");
                    }}
                  >
                    <ArrowLeftIcon sx={{ fontSize: 40 }} />
                  </div>
                  <img
                    src={`${path_Movie_img}${dataMovies.Movies_popular[count].backdrop_path}`}
                    onClick={() =>
                      setShow_moviedetail(dataMovies.Movies_popular[count].id)
                    }
                  />
                  <div
                    className="Wallpaper_Content_img_arrow arrow_right"
                    onClick={() => {
                      setChangeWallpaper("right");
                    }}
                  >
                    <ArrowRightIcon sx={{ fontSize: 40 }} />
                  </div>
                </div>
              )}

              <div
                className="HomePage_First_Wallpaper_overlay"
                style={{ ...backgroundoverlay }}
                onClick={() =>
                  setShow_moviedetail(dataMovies.Movies_popular[count].id)
                }
              >
                <div className="HomePage_First_Wallpaper_Content">
                  <div className="dis_flex">
                    <div className="line_title"></div>
                    <div className="Wallpaper_Content_title">
                      {dataMovies.Movies_popular[count] &&
                        dataMovies.Movies_popular[count].title}
                    </div>
                  </div>
                  <div className="titleDate_Score">
                    <div style={{ marginRight: "1rem" }}>
                      {dataMovies.Movies_popular[count] &&
                        dataMovies.Movies_popular[count].release_date}
                    </div>
                    <div className="titleScore">
                      <ReactSVG
                        className="svg_star"
                        style={{ marginRight: "0.5rem" }}
                        src={icon_star.toString()}
                      />
                      <div>
                        <div style={{ fontWeight: "bolder", fontSize: "1rem" }}>
                          {dataMovies.Movies_popular[count] &&
                            dataMovies.Movies_popular[count].vote_average}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {dataMovies.Loading_wallpaper && <Loading_logo height={"80vh"} />}
        </div>
      </div>

      <MovieList
        title={t("popular")}
        dataMovies={dataMovies.Movies_popular}
        LanguageCurrent={LanguageCurrent.API_Movie}
        Loading={dataMovies.Loading_wallpaper}
      />

      <MovieList
        title={t("top_rated")}
        dataMovies={dataMovies.Movies_top_rated}
        LanguageCurrent={LanguageCurrent.API_Movie}
        Loading={dataMovies.Loading_wallpaper}
      />

      <MovieList
        title={t("upcoming")}
        dataMovies={dataMovies.Movies_upcoming}
        LanguageCurrent={LanguageCurrent.API_Movie}
        Loading={dataMovies.Loading_wallpaper}
      />
    </>
  );
};

export default PageFirst;
