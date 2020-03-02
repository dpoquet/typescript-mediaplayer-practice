import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    init(mediaPlayer: MediaPlayer) {
        mediaPlayer.mute();
        mediaPlayer.play();
    }
}

export default AutoPlay;
