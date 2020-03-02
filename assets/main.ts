import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";


const video = document.getElementById("mediaPlayer");
const mediaPlayer = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()] });

const playButton = document.getElementById("playButton");
const muteButton = document.getElementById("muteButton");

playButton.onclick = () => mediaPlayer.togglePlay();
muteButton.onclick = () => mediaPlayer.toggleMute(); 