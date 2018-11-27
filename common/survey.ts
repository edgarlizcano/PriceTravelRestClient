export class Survey {
    private _CustomerProfile: number;
    private _CustomerName: string;
    private _CustomerCity: string;
    private _ServiceDate: string;
    private _Score: number;
    private _Comments: string;

    constructor(CustomerProfile: number, CustomerName: string, CustomerCity: string, ServiceDate: string, Score: number, Comments: string) {
        this._CustomerProfile = CustomerProfile;
        this._CustomerName = CustomerName;
        this._CustomerCity = CustomerCity;
        this._ServiceDate = ServiceDate;
        this._Score = Score;
        this._Comments = Comments;
    }

    get CustomerProfile(): number {
        return this._CustomerProfile;
    }

    set CustomerProfile(value: number) {
        this._CustomerProfile = value;
    }

    get CustomerName(): string {
        return this._CustomerName;
    }

    set CustomerName(value: string) {
        this._CustomerName = value;
    }

    get CustomerCity(): string {
        return this._CustomerCity;
    }

    set CustomerCity(value: string) {
        this._CustomerCity = value;
    }

    get ServiceDate(): string {
        return this._ServiceDate;
    }

    set ServiceDate(value: string) {
        this._ServiceDate = value;
    }

    get Score(): number {
        return this._Score;
    }

    set Score(value: number) {
        this._Score = value;
    }

    get Comments(): string {
        return this._Comments;
    }

    set Comments(value: string) {
        this._Comments = value;
    }
}