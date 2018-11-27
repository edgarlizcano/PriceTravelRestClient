export class Image {
    private _ThumbnailUri: string;
    private _ImageUri: string;
    private _Caption: string;

    constructor(ThumbnailUri: string, ImageUri: string, Caption: string) {
        this._ThumbnailUri = ThumbnailUri;
        this._ImageUri = ImageUri;
        this._Caption = Caption;
    }

    get ThumbnailUri(): string {
        return this._ThumbnailUri;
    }

    set ThumbnailUri(value: string) {
        this._ThumbnailUri = value;
    }

    get ImageUri(): string {
        return this._ImageUri;
    }

    set ImageUri(value: string) {
        this._ImageUri = value;
    }

    get Caption(): string {
        return this._Caption;
    }

    set Caption(value: string) {
        this._Caption = value;
    }
}