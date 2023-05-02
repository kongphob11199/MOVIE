import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// css
import "./MovieCard.css";

//
import { Movies } from "../../pages/Home/MoiveList/MovieList";
import {
  api_key,
  api_lang,
  path_API,
  path_Movie,
  path_Movie_img,
} from "../../../config";

// page
import VideoPlayer from "../VideoPlayer/VideoPlayer";

// icon
import { ReactSVG } from "react-svg";
import icon_star from "../../../assets/logo/star-svgrepo-com.svg";

// mui
import { Box } from "@mui/material";

type MovieCardProps = {
  dataMovies: Movies;
  LanguageCurrent: string;
};

const MovieCard: React.FC<any> = ({
  dataMovies,
  LanguageCurrent,
}: MovieCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // ตรวจสอบว่าวิดีโอถูกโหลดเรียบร้อยแล้ว
    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", () => {
        // เริ่มเล่นวิดีโออัตโนมัติเมื่อโหลดเสร็จ
        videoRef.current?.play();
      });
    }
  }, []);

  //   https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

  const [hover, setHover] = useState<boolean>(false);
  const setShow_detail = (status: string) => {
    if (status === "enter") {
      setHover(true);
    } else {
      setHover(false);
    }
  };

  const Navigate = useNavigate();
  const setShow_moviedetail = (id: number) => {
    Navigate(`/${id}`);
  };

  return (
    <div
      className="Movie_card "
      onClick={() => setShow_moviedetail(dataMovies.id)}
      onMouseEnter={() => setShow_detail("enter")}
      onMouseLeave={() => setShow_detail("leave")}
    >
      <img src={`${path_Movie_img}${dataMovies.poster_path}`} />
      <div className="Card_detail Cards_overlay">
        {/* {hover && (
          <VideoPlayer
            Movie_id={dataMovies.id}
            LanguageCurrent={LanguageCurrent}
          />
        )} */}
        <div>{dataMovies.original_title}</div>
        <Box
          className="title_score_hover"
          sx={{
            backgroundColor: "secondary.main",
          }}
        >
          <ReactSVG
            className="svg_star_hover"
            style={{
              marginRight: "0.2rem",
            }}
            src={icon_star.toString()}
          />
          {dataMovies.vote_average}
        </Box>
      </div>
    </div>
  );
};

export default MovieCard;
