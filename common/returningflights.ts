export class ReturningFlights {
    private _DepartureAirportCode: string;
    private _ArrivalAirportCode: string;
    private _DepartureDateTime: string;
    private _ArrivalDateTime: string;
    private _FlightNumber: string;

    constructor(DepartureAirportCode: string, ArrivalAirportCode: string, DepartureDateTime: string, ArrivalDateTime: string, FlightNumber: string) {
        this._DepartureAirportCode = DepartureAirportCode;
        this._ArrivalAirportCode = ArrivalAirportCode;
        this._DepartureDateTime = DepartureDateTime;
        this._ArrivalDateTime = ArrivalDateTime;
        this._FlightNumber = FlightNumber;
    }

    get DepartureAirportCode(): string {
        return this._DepartureAirportCode;
    }

    set DepartureAirportCode(value: string) {
        this._DepartureAirportCode = value;
    }

    get ArrivalAirportCode(): string {
        return this._ArrivalAirportCode;
    }

    set ArrivalAirportCode(value: string) {
        this._ArrivalAirportCode = value;
    }

    get DepartureDateTime(): string {
        return this._DepartureDateTime;
    }

    set DepartureDateTime(value: string) {
        this._DepartureDateTime = value;
    }

    get ArrivalDateTime(): string {
        return this._ArrivalDateTime;
    }

    set ArrivalDateTime(value: string) {
        this._ArrivalDateTime = value;
    }

    get FlightNumber(): string {
        return this._FlightNumber;
    }

    set FlightNumber(value: string) {
        this._FlightNumber = value;
    }
}