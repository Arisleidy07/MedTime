import { useState, useEffect } from "react";

const VideoBackground = ({ videos, opacity = 0.4 }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    // Cambiar de video cuando termine
    const videoElement = document.getElementById("bg-video");

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [videos.length]);

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      <video
        id="bg-video"
        key={currentVideoIndex}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
