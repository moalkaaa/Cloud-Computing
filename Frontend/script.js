// Video-Elemente abrufen
const videos = document.querySelectorAll("video");

// Steuerungselemente abrufen
const playAllButton = document.getElementById("play-all");
const pauseAllButton = document.getElementById("pause-all");

// Alle Videos abspielen
playAllButton.addEventListener("click", () => {
    videos.forEach(video => video.play());
});

// Alle Videos pausieren
pauseAllButton.addEventListener("click", () => {
    videos.forEach(video => video.pause());
});

