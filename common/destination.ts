import {Destinations} from "./destinations";

export class Destination {
    private _CountryCode: string;
    private _Name: string;
    private _Uri: string;
    private _Destinations: Destinations[];

    constructor(CountryCode: string, Name: string, Uri: string, Destinations: Destinations[]) {
        this._CountryCode = CountryCode;
        this._Name = Name;
        this._Uri = Uri;
        this._Destinations = Destinations;
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

    get Destinations(): Destinations[] {
        return this._Destinations;
    }

    set Destinations(value: Destinations[]) {
        this._Destinations = value;
    }
}