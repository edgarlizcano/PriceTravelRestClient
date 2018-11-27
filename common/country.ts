export class Country {
    private _CountryCode: string;
    private _Name: string;
    private _Uri: string;

    constructor(CountryCode: string, Name: string, Uri: string) {
        this._CountryCode = CountryCode;
        this._Name = Name;
        this._Uri = Uri;
    }

    get CountryCode(): string {
        return this._CountryCode;
    }

    set CountryCode(value: string) {
        this._CountryCode = value;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get Uri(): string {
        return this._Uri;
    }

    set Uri(value: string) {
        this._Uri = value;
    }
}