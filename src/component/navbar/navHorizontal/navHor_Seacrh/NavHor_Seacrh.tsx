import React from "react";

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
};

const NavHor_Seacrh: React.FC<any> = ({
  dataMovie_Search,
}: NavHor_SeacrhProps) => {
  const { theme, toggleTheme }: any = React.useContext(ThemeContext);
  console.log("dataMovie_Search", dataMovie_Search);

  return (
    <>
      <div
        className="SearchMovie_detail"
        style={{ backgroundColor: theme.main }}
      >
        <div className="SearchMovie_Card">
          {dataMovie_Search &&
            dataMovie_Search.map((item) => {
              return (
                <div className="SearchMovie_Card_Content" key={item.id}>
                  <img src={`${path_Movie_img}${item.backdrop_path}`} />
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
        NavHor_Seacrh
      </div>
    </>
  );
};

export default NavHor_Seacrh;
