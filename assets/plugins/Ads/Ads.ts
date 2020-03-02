import ALL_ADS from "./AdsList";

// Appling Singelton design patter //

class Ads {
    private static instance: Ads;
    private ads: Array<Ad>;

    private constructor() {
        this.initAds();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Ads();
        }

        return this.instance;
    }

    getAd () {
        if (this.ads.length === 0) this.initAds();

        return this.ads.pop();
    }

    private initAds() {
        this.ads = [...ALL_ADS];
    }
}

export interface Ad {
    imageUrl: string;
    title: string;
    body: string;
    url: string;
}

export default Ads;