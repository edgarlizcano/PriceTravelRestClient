import {Service} from "./service";

export class Hotelinformation {
    private _Address:    string;
    private _City:       string;
    private _State:      string;
    private _CountryCode: string;
    private _Country:    string;
    private _ChainId: number;
    private _Chain: string;
    private _DestinationId: number;
    private _ZipCode: string;
    private _TotalRooms: number;
    private _Category: number;
    private _Description: string;
    private _LogoUri: string;
    private _HotelImageUri: string;
    private _Services: Service[];

    constructor(Address: string, City: string, State: string, CountryCode: string, Country: string, ChainId: number, Chain: string, DestinationId: number, ZipCode: string, TotalRooms: number, Category: number, Description: string, LogoUri: string, HotelImageUri: string, Services: Service[]) {
        this._Address = Address;
        this._City = City;
        this._State = State;
        this._CountryCode = CountryCode;
        this._Country = Country;
        this._ChainId = ChainId;
        this._Chain = Chain;
        this._DestinationId = DestinationId;
        this._ZipCode = ZipCode;
        this._TotalRooms = TotalRooms;
        this._Category = Category;
        this._Description = Description;
        this._LogoUri = LogoUri;
        this._HotelImageUri = HotelImageUri;
        this._Services = Services;
    }

    get Address(): string {
        return this._Address;
    }

    set Address(value: string) {
        this._Address = value;
    }

    get City(): string {
        return this._City;
    }

    set City(value: string) {
        this._City = value;
    }

    get State(): string {
        return this._State;
    }

    set State(value: string) {
        this._State = value;
    }

    get CountryCode(): string {
        return this._CountryCode;
    }

    set CountryCode(value: string) {
        this._CountryCode = value;
    }

    get Country(): string {
        return this._Country;
    }

    set Country(value: string) {
        this._Country = value;
    }

    get ChainId(): number {
        return this._ChainId;
    }

    set ChainId(value: number) {
        this._ChainId = value;
    }

    get Chain(): string {
        return this._Chain;
    }

    set Chain(value: string) {
        this._Chain = value;
    }

    get DestinationId(): number {
        return this._DestinationId;
    }

    set DestinationId(value: number) {
        this._DestinationId = value;
    }

    get ZipCode(): string {
        return this._ZipCode;
    }

    set ZipCode(value: string) {
        this._ZipCode = value;
    }

    get TotalRooms(): number {
        return this._TotalRooms;
    }

    set TotalRooms(value: number) {
        this._TotalRooms = value;
    }

    get Category(): number {
        return this._Category;
    }

    set Category(value: number) {
        this._Category = value;
    }

    get Description(): string {
        return this._Description;
    }

    set Description(value: string) {
        this._Description = value;
    }

    get LogoUri(): string {
        return this._LogoUri;
    }

    set LogoUri(value: string) {
        this._LogoUri = value;
    }

    get HotelImageUri(): string {
        return this._HotelImageUri;
    }

    set HotelImageUri(value: string) {
        this._HotelImageUri = value;
    }

    get Services(): Service[] {
        return this._Services;
    }

    set Services(value: Service[]) {
        this._Services = value;
    }
}