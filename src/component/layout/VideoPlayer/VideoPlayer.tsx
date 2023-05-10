import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

// config
import axios from "axios";
import { api_key, api_lang, path_Movie } from "../../../config";

type VideoPlayerProps = {
  Movie_id: number;
  LanguageCurrent: string;
  setMuted?: boolean;
  setPlaying?: boolean;
  setControls?: boolean;
};

const VideoPlayer: React.FC<any> = ({
  Movie_id,
  LanguageCurrent,
  setMuted = true,
  setPlaying = true,
  setControls = false,
}: VideoPlayerProps) => {
  const [videoKey, setVideoKey] = useState<string>("");

  useEffect(() => {
    const fetchVideoKey = async () => {
      try {
        const response = await axios.get(
          `${path_Movie}${Movie_id}/videos${api_key}${api_lang}${"en-US"}`
        );
        const videoResults = response.data.results;
        // console.log("videoResults", response.data.results);
        if (videoResults.length > 0) {
          setVideoKey(videoResults[0].key);
        }
      } catch (error) {
        console.log("Error fetching video:", error);
      }
    };

    fetchVideoKey();
  }, [Movie_id]);
  // console.log("video", `https://www.youtube.com/watch?v=${videoKey}`);

  return (
    <div>
      {videoKey && (
        <div style={{ height: "500px" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoKey}`}
            playing={setPlaying}
            muted={setMuted}
            controls={setControls}
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
