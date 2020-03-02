
class MediaPlayer {
    media: HTMLMediaElement;
    container: HTMLElement;
    private plugins: Array<any>;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.renderContainer();
        this.initPlugins();
    }

    play() {
        this.media.play();
    };
    
    pause() {
        this.media.pause();
    };

    mute() {
        this.media.muted = true;
    };
    
    unmute() {
        this.media.muted = false;
    };

    togglePlay() {
        if (this.media.paused) this.media.play(); 
        else this.media.pause();
    };
    
    toggleMute() {
        this.media.muted = !this.media.muted;
    };

    private renderContainer() {
        this.container = document.createElement('div');
        this.container.classList.add('movie');
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.init(this);
        });
    }
}

export default MediaPlayer;