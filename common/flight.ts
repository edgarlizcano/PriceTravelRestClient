import {EmergencyContact} from "./emergencycontact";
import {FlightPassengers} from "./flightpassengers";
import {Flights} from "./flights";

export class Flight {
    private _TripMode: number;
    private _TripCabin: number;
    private _Adults: number;
    private _Seniors: number;
    private _ChildAges: number[];
    private _PromotionalCode: string;
    private _IsPackageRate: boolean;
    private _TotalAmount: number;
    private _EmergencyContact: EmergencyContact;
    private _ExtraCodes: string[];
    private _FlightPassengers: FlightPassengers;
    private _Flights: Flights;
    private _Type: number;

    constructor(TripMode: number, TripCabin: number, Adults: number, Seniors: number, ChildAges: number[], PromotionalCode: string, IsPackageRate: boolean, TotalAmount: number, EmergencyContact: EmergencyContact, ExtraCodes: string[], FlightPassengers: FlightPassengers, Flights: Flights, Type: number) {
        this._TripMode = TripMode;
        this._TripCabin = TripCabin;
        this._Adults = Adults;
        this._Seniors = Seniors;
        this._ChildAges = ChildAges;
        this._PromotionalCode = PromotionalCode;
        this._IsPackageRate = IsPackageRate;
        this._TotalAmount = TotalAmount;
        this._EmergencyContact = EmergencyContact;
        this._ExtraCodes = ExtraCodes;
        this._FlightPassengers = FlightPassengers;
        this._Flights = Flights;
        this._Type = Type;
    }

    get TripMode(): number {
        return this._TripMode;
    }

    set TripMode(value: number) {
        this._TripMode = value;
    }

    get TripCabin(): number {
        return this._TripCabin;
    }

    set TripCabin(value: number) {
        this._TripCabin = value;
    }

    get Adults(): number {
        return this._Adults;
    }

    set Adults(value: number) {
        this._Adults = value;
    }

    get Seniors(): number {
        return this._Seniors;
    }

    set Seniors(value: number) {
        this._Seniors = value;
    }

    get ChildAges(): number[] {
        return this._ChildAges;
    }

    set ChildAges(value: number[]) {
        this._ChildAges = value;
    }

    get PromotionalCode(): string {
        return this._PromotionalCode;
    }

    set PromotionalCode(value: string) {
        this._PromotionalCode = value;
    }

    get IsPackageRate(): boolean {
        return this._IsPackageRate;
    }

    set IsPackageRate(value: boolean) {
        this._IsPackageRate = value;
    }

    get TotalAmount(): number {
        return this._TotalAmount;
    }

    set TotalAmount(value: number) {
        this._TotalAmount = value;
    }

    get EmergencyContact(): EmergencyContact {
        return this._EmergencyContact;
    }

    set EmergencyContact(value: EmergencyContact) {
        this._EmergencyContact = value;
    }

    get ExtraCodes(): string[] {
        return this._ExtraCodes;
    }

    set ExtraCodes(value: string[]) {
        this._ExtraCodes = value;
    }

    get FlightPassengers(): FlightPassengers {
        return this._FlightPassengers;
    }

    set FlightPassengers(value: FlightPassengers) {
        this._FlightPassengers = value;
    }

    get Flights(): Flights {
        return this._Flights;
    }

    set Flights(value: Flights) {
        this._Flights = value;
    }

    get Type(): number {
        return this._Type;
    }

    set Type(value: number) {
        this._Type = value;
    }
}