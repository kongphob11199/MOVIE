import React, { useState, useRef, MouseEvent, useEffect } from "react";

// css
import "./MovieList.css";

// config
import { path_Movie_img } from "../../../../config";

// icon
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

//
import MovieCard from "../../../layout/Movie/MovieCard";

import { Box } from "@mui/material";

// redux

interface genres {
  id: number;
  name: string;
}
export interface Movies {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  tagline: string;
  runtime: number;
  genres: genres[];
  imdb_id: string;
}

type MovieListProps = {
  title: string;
  dataMovies: Movies[];
  LanguageCurrent: string;
  Loading: boolean;
};

const MovieList: React.FC<any> = ({
  title,
  dataMovies,
  LanguageCurrent,
  Loading,
}: MovieListProps) => {
  // console.log("dataMovies", dataMovies);

  const listRef = useRef<HTMLDivElement>(null);
  const sliceBox_Movie_card = (status: string) => {
    if (listRef.current) {
      // const slideAmount = 925;
      const slideAmount = 190;
      const scrollAmount = 190;
      const scrollDelay = 0;
      let remainingScroll = slideAmount;

      const scrollStep = () => {
        if (remainingScroll <= 0) {
          return;
        }

        if (listRef.current && status === "right") {
          listRef.current.scrollLeft += Math.min(scrollAmount, remainingScroll);
        } else if (listRef.current && status === "left") {
          listRef.current.scrollLeft -= Math.min(scrollAmount, remainingScroll);
        }

        remainingScroll -= scrollAmount;
        setTimeout(scrollStep, scrollDelay);
      };

      scrollStep();
    }
  };

  const emptyArray: number[] = new Array(20).fill(1);

  return (
    <>
      <div className="Home_Movie">
        <div className="Home_Movie_typeText">{title}</div>

        {!Loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="Movie_card_arrow Movie_card_ArrowLeft"
              onClick={() => sliceBox_Movie_card("left")}
              sx={{
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <ArrowLeftIcon sx={{ fontSize: 40 }} />
            </Box>

            <div
              className="Box_Movie_card container"
              id="draggable"
              ref={listRef}
            >
              {dataMovies[0] &&
                dataMovies.map((item: Movies, index: number) => {
                  return (
                    <MovieCard
                      key={index}
                      dataMovies={item}
                      LanguageCurrent={LanguageCurrent}
                    />
                  );
                })}
            </div>
            <Box
              className="Movie_card_arrow Movie_card_ArrowRight"
              onClick={() => sliceBox_Movie_card("right")}
              sx={{
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <ArrowRightIcon sx={{ fontSize: 40 }} />
            </Box>
          </div>
        )}
        {Loading && (
          <div className="Box_Movie_card container">
            {emptyArray &&
              emptyArray.map((item: number, index: number) => {
                return (
                  <div
                    className="Movie_card skeleton "
                    key={index}
                    style={{ height: "270px" }}
                  >
                    <div className="skeleton-right">
                      <div className="square"></div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default MovieList;
