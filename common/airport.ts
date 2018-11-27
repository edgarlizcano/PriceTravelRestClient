export class Airport {
    private _Code: string;
    private _Name: string;
    private _CityName: string;
    private _CountryCode: string;
    private _CountryName: string;
    private _DestinationId: number;

    constructor(Code: string, Name: string, CityName: string, CountryCode: string, CountryName: string, DestinationId: number) {
        this._Code = Code;
        this._Name = Name;
        this._CityName = CityName;
        this._CountryCode = CountryCode;
        this._CountryName = CountryName;
        this._DestinationId = DestinationId;
    }


    get Code(): string {
        return this._Code;
    }

    set Code(value: string) {
        this._Code = value;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get CityName(): string {
        return this._CityName;
    }

    set CityName(value: string) {
        this._CityName = value;
    }

    get CountryCode(): string {
        return this._CountryCode;
    }

    set CountryCode(value: string) {
        this._CountryCode = value;
    }

    get CountryName(): string {
        return this._CountryName;
    }

    set CountryName(value: string) {
        this._CountryName = value;
    }

    get DestinationId(): number {
        return this._DestinationId;
    }

    set DestinationId(value: number) {
        this._DestinationId = value;
    }
}