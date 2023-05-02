import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

// config
import axios from "axios";
import { api_key, api_lang, path_Movie } from "../../../config";

type VideoPlayerProps = {
  Movie_id: number;
  LanguageCurrent: string;
};

const VideoPlayer: React.FC<any> = ({
  Movie_id,
  LanguageCurrent,
}: VideoPlayerProps) => {
  const [videoKey, setVideoKey] = useState<string>("");

  useEffect(() => {
    const fetchVideoKey = async () => {
      try {
        const response = await axios.get(
          `${path_Movie}${Movie_id}/videos${api_key}${api_lang}${LanguageCurrent}`
        );
        const videoResults = response.data.results;
        if (videoResults.length > 0) {
          setVideoKey(videoResults[0].key);
        }
      } catch (error) {
        console.log("Error fetching video:", error);
      }
    };

    fetchVideoKey();
  }, []);
  // console.log("video", `https://www.youtube.com/watch?v=${videoKey}`);

  return (
    <div>
      {videoKey && (
        <div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoKey}`}
            playing={true}
            muted={true}
            // controls={true}
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
