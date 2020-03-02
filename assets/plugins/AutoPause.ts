import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private threshold: number;
    private player: MediaPlayer;

    constructor() {
        this.threshold = 0.25;
    }

    init(mediaPlayer: MediaPlayer) {
        this.player = mediaPlayer;

        const observer = new IntersectionObserver(this.handlerIntersection.bind(this), {
            threshold: this.threshold
        });

        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handlerVisibilityChange.bind(this));
    }

    private handlerIntersection(entries: Array<IntersectionObserverEntry>) {
        const entry = entries[0];
       const isVisible = entry.intersectionRatio >= this.threshold;

       if(isVisible) {
           this.player.play();
       } else {
           this.player.pause();
       }
    }

    private handlerVisibilityChange() {
        const isVisible = document.visibilityState === "visible";

        if(isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;