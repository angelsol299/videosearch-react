import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <idv>{renderList}</idv>;
};

export default VideoList;
