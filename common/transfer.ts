export class Transfer {
    private _Id: number;
    private _TransferRateId: number;
    private _TransferType: number;
    private _ArrivalDate: string;
    private _ArrivalTime: string;
    private _ArrivalFlightNumber: string;
    private _ArrivalFlightAirline: string;
    private _DepartureDate: string;
    private _DepartureTime: string;
    private _DepartureFlightNumber: string;
    private _DepartureFlightAirline: string;
    private _NumberOfAdults: number;
    private _ChildAges: number[];
    private _AirportCode: string;
    private _HotelId: number;
    private _TotalAmount: number;
    private _Type: number;

    constructor(Id: number, TransferRateId: number, TransferType: number, ArrivalDate: string, ArrivalTime: string, ArrivalFlightNumber: string, ArrivalFlightAirline: string, DepartureDate: string, DepartureTime: string, DepartureFlightNumber: string, DepartureFlightAirline: string, NumberOfAdults: number, ChildAges: number[], AirportCode: string, HotelId: number, TotalAmount: number, Type: number) {
        this._Id = Id;
        this._TransferRateId = TransferRateId;
        this._TransferType = TransferType;
        this._ArrivalDate = ArrivalDate;
        this._ArrivalTime = ArrivalTime;
        this._ArrivalFlightNumber = ArrivalFlightNumber;
        this._ArrivalFlightAirline = ArrivalFlightAirline;
        this._DepartureDate = DepartureDate;
        this._DepartureTime = DepartureTime;
        this._DepartureFlightNumber = DepartureFlightNumber;
        this._DepartureFlightAirline = DepartureFlightAirline;
        this._NumberOfAdults = NumberOfAdults;
        this._ChildAges = ChildAges;
        this._AirportCode = AirportCode;
        this._HotelId = HotelId;
        this._TotalAmount = TotalAmount;
        this._Type = Type;
    }

    get Id(): number {
        return this._Id;
    }

    set Id(value: number) {
        this._Id = value;
    }

    get TransferRateId(): number {
        return this._TransferRateId;
    }

    set TransferRateId(value: number) {
        this._TransferRateId = value;
    }

    get TransferType(): number {
        return this._TransferType;
    }

    set TransferType(value: number) {
        this._TransferType = value;
    }

    get ArrivalDate(): string {
        return this._ArrivalDate;
    }

    set ArrivalDate(value: string) {
        this._ArrivalDate = value;
    }

    get ArrivalTime(): string {
        return this._ArrivalTime;
    }

    set ArrivalTime(value: string) {
        this._ArrivalTime = value;
    }

    get ArrivalFlightNumber(): string {
        return this._ArrivalFlightNumber;
    }

    set ArrivalFlightNumber(value: string) {
        this._ArrivalFlightNumber = value;
    }

    get ArrivalFlightAirline(): string {
        return this._ArrivalFlightAirline;
    }

    set ArrivalFlightAirline(value: string) {
        this._ArrivalFlightAirline = value;
    }

    get DepartureDate(): string {
        return this._DepartureDate;
    }

    set DepartureDate(value: string) {
        this._DepartureDate = value;
    }

    get DepartureTime(): string {
        return this._DepartureTime;
    }

    set DepartureTime(value: string) {
        this._DepartureTime = value;
    }

    get DepartureFlightNumber(): string {
        return this._DepartureFlightNumber;
    }

    set DepartureFlightNumber(value: string) {
        this._DepartureFlightNumber = value;
    }

    get DepartureFlightAirline(): string {
        return this._DepartureFlightAirline;
    }

    set DepartureFlightAirline(value: string) {
        this._DepartureFlightAirline = value;
    }

    get NumberOfAdults(): number {
        return this._NumberOfAdults;
    }

    set NumberOfAdults(value: number) {
        this._NumberOfAdults = value;
    }

    get ChildAges(): number[] {
        return this._ChildAges;
    }

    set ChildAges(value: number[]) {
        this._ChildAges = value;
    }

    get AirportCode(): string {
        return this._AirportCode;
    }

    set AirportCode(value: string) {
        this._AirportCode = value;
    }

    get HotelId(): number {
        return this._HotelId;
    }

    set HotelId(value: number) {
        this._HotelId = value;
    }

    get TotalAmount(): number {
        return this._TotalAmount;
    }

    set TotalAmount(value: number) {
        this._TotalAmount = value;
    }

    get Type(): number {
        return this._Type;
    }

    set Type(value: number) {
        this._Type = value;
    }
}