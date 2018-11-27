export class Tour {
    private _Id: number;
    private _ArrivalDate: string;
    private _DepartureDate: string;
    private _TotalAmount: number;
    private _Adults: number;
    private _ChildValues: number[];
    private _HotelName: string;
    private _TourTime: string;
    private _Type: number;

    constructor(Id: number, ArrivalDate: string, DepartureDate: string, TotalAmount: number, Adults: number, ChildValues: number[], HotelName: string, TourTime: string, Type: number) {
        this._Id = Id;
        this._ArrivalDate = ArrivalDate;
        this._DepartureDate = DepartureDate;
        this._TotalAmount = TotalAmount;
        this._Adults = Adults;
        this._ChildValues = ChildValues;
        this._HotelName = HotelName;
        this._TourTime = TourTime;
        this._Type = Type;
    }

    get Id(): number {
        return this._Id;
    }

    set Id(value: number) {
        this._Id = value;
    }

    get ArrivalDate(): string {
        return this._ArrivalDate;
    }

    set ArrivalDate(value: string) {
        this._ArrivalDate = value;
    }

    get DepartureDate(): string {
        return this._DepartureDate;
    }

    set DepartureDate(value: string) {
        this._DepartureDate = value;
    }

    get TotalAmount(): number {
        return this._TotalAmount;
    }

    set TotalAmount(value: number) {
        this._TotalAmount = value;
    }

    get Adults(): number {
        return this._Adults;
    }

    set Adults(value: number) {
        this._Adults = value;
    }

    get ChildValues(): number[] {
        return this._ChildValues;
    }

    set ChildValues(value: number[]) {
        this._ChildValues = value;
    }

    get HotelName(): string {
        return this._HotelName;
    }

    set HotelName(value: string) {
        this._HotelName = value;
    }

    get TourTime(): string {
        return this._TourTime;
    }

    set TourTime(value: string) {
        this._TourTime = value;
    }

    get Type(): number {
        return this._Type;
    }

    set Type(value: number) {
        this._Type = value;
    }
}
