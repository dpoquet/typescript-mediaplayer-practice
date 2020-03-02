import MediaPlayer from "../../MediaPlayer";
import Ads, { Ad } from "./Ads";

class AdsPlugin {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    private adsContainer: HTMLElement;

    constructor() {
        this.ads = Ads.getInstance();
        this.adsContainer = document.createElement('div');
    }

    init(player: MediaPlayer) {
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));
    }

    private handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime);

        if (currentTime % 30 === 0) this.renderAd();
    }

    private renderAd() {
        if (this.currentAd) {
            return;
        }

        const ad = this.ads.getAd();
        this.currentAd = ad;

        this.adsContainer.innerHTML = `
            <div class="ads">
                <a class="ads__wrapper" href="${this.currentAd.url}" target="_blank">
                    <img class="ads__image" src="${this.currentAd.imageUrl}" alt="${this.currentAd.title}" />
                    <div class="ads__content">
                        <span class="ads__title">${this.currentAd.title}</span>
                        <p class="ads__desc">${this.currentAd.body}</p>
                    </div>
                </a>
            </div>
        `;

        // Remove current Ad
        setTimeout(() => {
            this.currentAd = null;
            this.adsContainer.innerHTML = '';
        }, 5000);
    }
}

export default AdsPlugin;