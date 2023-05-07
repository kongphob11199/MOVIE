import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import ThemeContext from "../../../theme/themeBackground";
import { useTranslation } from "react-i18next";

// css
import "./MovieDetail.css";

// config
import axios from "axios";
import { api_key, api_lang, path_Movie, path_Movie_img } from "../../../config";

// redux
import { useSelector } from "react-redux";
import { PagesSelector } from "../../../store/slices/PagesSlices";

// interface
import { Movies } from "../Home/MoiveList/MovieList";

// pages
import Loading_logo from "../Loading/Loading_logo";
import VideoPlayer from "../../layout/VideoPlayer/VideoPlayer";

// icon
import { ReactSVG } from "react-svg";
import icon_star from "../../../assets/logo/star-svgrepo-com.svg";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

// mui
import { Button, Chip } from "@mui/material";

type MovieDetailProps = {};

const MovieDetail: React.FC<any> = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);
  const backgroundoverlay = {
    backgroundImage: `linear-gradient(rgb(0, 0, 0, 0), ${theme.main})`,
  };

  const [MovieDetail, setMovieDetail] = useState<Movies>();
  const { movie_id } = useParams();

  const [checkLoad, setCheckLoad] = useState<boolean>(false);

  const LanguageCurrent = useSelector(PagesSelector);

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [LanguageCurrent]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${path_Movie}${movie_id}${api_key}${api_lang}${LanguageCurrent.API_Movie}`
      );
      if (response.data.title !== undefined) {
        setMovieDetail(response.data);
        setCheckLoad(true);
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };
  useEffect(() => {
    // console.log("MovieDetail :", MovieDetail);
  }, [MovieDetail, checkLoad]);

  const numberFormatter = new Intl.NumberFormat("en-US");
  return (
    <>
      <Helmet>
        <title>Movie</title>
      </Helmet>
      {MovieDetail !== undefined && checkLoad && (
        <div className="MoiveDetail">
          <div className="MoiveDetail_container">
            <div className="MoiveDetail_img">
              <img src={`${path_Movie_img}${MovieDetail.backdrop_path}`} />
              <div
                className="MoiveDetail_img_overlay"
                style={{ ...backgroundoverlay }}
              ></div>
            </div>
            <div className="MoiveDetail_content">
              <img src={`${path_Movie_img}${MovieDetail.poster_path}`} />
              <div className="content_detailMovie">
                <div className="title_MoiveName">
                  <div className="line"></div>
                  {MovieDetail.title}
                </div>
                <div className="tagline_Moive">{MovieDetail.tagline}</div>
                <div className="score_Movie">
                  <span style={{ fontWeight: "bolder" }}>
                    {parseFloat(MovieDetail.vote_average.toString()).toFixed(2)}
                  </span>
                  /10
                  <ReactSVG
                    className="svg_star_movieDetail"
                    style={{
                      marginRight: "0.2rem",
                    }}
                    src={icon_star.toString()}
                  />
                  ({numberFormatter.format(MovieDetail.vote_count)}) {t("vote")}
                </div>
                <div className="runtime_Movie">
                  {MovieDetail.runtime} {t("mins")}
                  <AccessTimeFilledIcon
                    sx={{ fontSize: "20px", marginLeft: "8px" }}
                  />
                </div>
                <div className="date_Movie">
                  {t("Release_date")} : {MovieDetail.release_date}
                </div>
                <div className="genres_Movie">
                  {MovieDetail.genres
                    ? MovieDetail.genres.map((item, index) => (
                        <div key={index}>
                          <Chip
                            label={item.name}
                            color="primary"
                            sx={{
                              marginRight: "0.5rem",
                              textShadow: "none",
                              fontWeight: "bold",
                              minWidth: "50px",
                            }}
                          />
                        </div>
                      ))
                    : ""}
                </div>

                <div className="synopsis_Movie">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      textShadow: "none",
                      color: theme.color_Text,
                    }}
                  >
                    {t("Synopsis")}
                  </span>
                  <div
                    style={{
                      textIndent: "1.5rem",
                      marginTop: "0.5rem",
                      textShadow: "none",
                      color: theme.color_Text,
                    }}
                  >
                    {MovieDetail.overview}
                  </div>
                </div>
              </div>
            </div>
            <div className="Video_MovieDetail">
              <VideoPlayer
                Movie_id={MovieDetail.id}
                LanguageCurrent={LanguageCurrent.API_Movie}
                setPlaying={false}
              />
            </div>
            {MovieDetail && MovieDetail.imdb_id && (
              <div className="Links_Movie">
                <a
                  href={"https://www.imdb.com/title/" + MovieDetail.imdb_id}
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <button className="Btn_imdb">
                    <p>
                      <span>IMDb</span>
                    </p>
                  </button>
                </a>
              </div>
            )}
            <div className="Footer_MovieDettail"></div>
          </div>
        </div>
      )}

      {!checkLoad && <Loading_logo height={"calc(100vh - 61px)"} />}
    </>
  );
};

export default MovieDetail;
