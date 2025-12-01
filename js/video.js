// ========================================
// VIDEO BACKGROUND ROTATION
// ========================================

const backgroundVideos = [
  "/CONTENIDO/1.mp4",
  "/CONTENIDO/4.mp4",
  "/CONTENIDO/5.mp4",
  "/CONTENIDO/6.mp4",
];

let currentVideoIndex = 0;

function setupVideoRotation() {
  const bgVideo = document.getElementById("bgVideo");

  if (!bgVideo) return;

  setInterval(() => {
    currentVideoIndex = (currentVideoIndex + 1) % backgroundVideos.length;

    bgVideo.style.opacity = "0";

    setTimeout(() => {
      bgVideo.src = backgroundVideos[currentVideoIndex];
      bgVideo.load();
      bgVideo.play();
      bgVideo.style.opacity = "1";
    }, 500);
  }, 15000);

  bgVideo.style.transition = "opacity 0.5s ease-in-out";
}
