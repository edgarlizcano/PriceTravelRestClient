import {Airport} from "./airport";

export class Destinations {
    private _Id: number;
    private _Name: string;
    private _IsActive: boolean;
    private _CountryCode: string;
    private _CountryName: string;
    private _Type: number;
    private _Airports: Airport[];

    constructor(Id: number, Name: string, IsActive: boolean, CountryCode: string, CountryName: string, Type: number, Airports: Airport[]) {
        this._Id = Id;
        this._Name = Name;
        this._IsActive = IsActive;
        this._CountryCode = CountryCode;
        this._CountryName = CountryName;
        this._Type = Type;
        this._Airports = Airports;
    }


    get Id(): number {
        return this._Id;
    }

    set Id(value: number) {
        this._Id = value;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get IsActive(): boolean {
        return this._IsActive;
    }

    set IsActive(value: boolean) {
        this._IsActive = value;
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

    get Type(): number {
        return this._Type;
    }

    set Type(value: number) {
        this._Type = value;
    }

    get Airports(): Airport[] {
        return this._Airports;
    }

    set Airports(value: Airport[]) {
        this._Airports = value;
    }
}