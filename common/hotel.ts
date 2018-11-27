import {Hotelinformation} from "./hotelinformation";
import {Room} from "./room";
import {Image} from "./image";

class Hotel {
    private _Id: number;
    private _Name: string;
    private _Uri: string;
    private _IsActive: boolean;
    private _HotelInformation: Hotelinformation;
    private _Rooms: Room[];
    private _Images: Image[];
    private _AverageRateWithTax: number;

    constructor(Id: number, Name: string, Uri: string, IsActive: boolean, HotelInformation: Hotelinformation, Rooms: Room[], Images: Image[], AverageRateWithTax: number) {
        this._Id = Id;
        this._Name = Name;
        this._Uri = Uri;
        this._IsActive = IsActive;
        this._HotelInformation = HotelInformation;
        this._Rooms = Rooms;
        this._Images = Images;
        this._AverageRateWithTax = AverageRateWithTax;
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

    get Uri(): string {
        return this._Uri;
    }

    set Uri(value: string) {
        this._Uri = value;
    }

    get IsActive(): boolean {
        return this._IsActive;
    }

    set IsActive(value: boolean) {
        this._IsActive = value;
    }

    get HotelInformation(): Hotelinformation {
        return this._HotelInformation;
    }

    set HotelInformation(value: Hotelinformation) {
        this._HotelInformation = value;
    }

    get Rooms(): Room[] {
        return this._Rooms;
    }

    set Rooms(value: Room[]) {
        this._Rooms = value;
    }

    get Images(): Image[] {
        return this._Images;
    }

    set Images(value: Image[]) {
        this._Images = value;
    }

    get AverageRateWithTax(): number {
        return this._AverageRateWithTax;
    }

    set AverageRateWithTax(value: number) {
        this._AverageRateWithTax = value;
    }
}


