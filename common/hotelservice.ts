import {RoomService} from "./roomservice";

export class HotelService {
    private _RatePlanId: number;
    private _HotelId: number;
    private _RoomId: number;
    private _ArrivalDate: string;
    private _DepartureDate: string;
    private _NumberOfRooms: number;
    private _Currency: string;
    private _TotalAmount: number;
    private _IsPackageRate: boolean;
    private _Rooms: RoomService[];
    private _Type: number;

    constructor(RatePlanId: number, HotelId: number, RoomId: number, ArrivalDate: string, DepartureDate: string, NumberOfRooms: number, Currency: string, TotalAmount: number, IsPackageRate: boolean, Rooms: RoomService[], Type: number) {
        this._RatePlanId = RatePlanId;
        this._HotelId = HotelId;
        this._RoomId = RoomId;
        this._ArrivalDate = ArrivalDate;
        this._DepartureDate = DepartureDate;
        this._NumberOfRooms = NumberOfRooms;
        this._Currency = Currency;
        this._TotalAmount = TotalAmount;
        this._IsPackageRate = IsPackageRate;
        this._Rooms = Rooms;
        this._Type = Type;
    }

    get RatePlanId(): number {
        return this._RatePlanId;
    }

    set RatePlanId(value: number) {
        this._RatePlanId = value;
    }

    get HotelId(): number {
        return this._HotelId;
    }

    set HotelId(value: number) {
        this._HotelId = value;
    }

    get RoomId(): number {
        return this._RoomId;
    }

    set RoomId(value: number) {
        this._RoomId = value;
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

    get NumberOfRooms(): number {
        return this._NumberOfRooms;
    }

    set NumberOfRooms(value: number) {
        this._NumberOfRooms = value;
    }

    get Currency(): string {
        return this._Currency;
    }

    set Currency(value: string) {
        this._Currency = value;
    }

    get TotalAmount(): number {
        return this._TotalAmount;
    }

    set TotalAmount(value: number) {
        this._TotalAmount = value;
    }

    get IsPackageRate(): boolean {
        return this._IsPackageRate;
    }

    set IsPackageRate(value: boolean) {
        this._IsPackageRate = value;
    }

    get Rooms(): RoomService[] {
        return this._Rooms;
    }

    set Rooms(value: RoomService[]) {
        this._Rooms = value;
    }

    get Type(): number {
        return this._Type;
    }

    set Type(value: number) {
        this._Type = value;
    }
}
