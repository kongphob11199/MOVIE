import * as React from "react";

import { useTranslation } from "react-i18next";

// css
import "./PageFirst.css";

// icon
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
  MoviesSelector,
  setOneDataMovies_Popuplar,
} from "../../../../../store/slices/MovieSlices";

type PageFirstProps = {
  //
};

const PageFirst: React.FC<any> = () => {
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
      console.log(
        "dataMovies.Movies_popular[count]",
        dataMovies.Movies_popular[count]
      );
    }
  }, [dataMovies, count]);

  React.useEffect(() => {
    dispatch(getdataMovies_Popuplar(LanguageCurrent.API_Movie));
  }, [LanguageCurrent]);

  return (
    <div className="HomePage_First">
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
        >
          <div className="HomePage_First_Wallpaper_Content">
            <div className="dis_flex">
              <div className="line_title">
                <div className="line_title-padding"></div>
              </div>
              <div className="Wallpaper_Content_title">
                {dataMovies.Movies_popular[count] &&
                  dataMovies.Movies_popular[count].original_title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFirst;
