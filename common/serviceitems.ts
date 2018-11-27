import {Flight} from "./flight";
import {Insurance} from "./insurance";
import {Transfer} from "./transfer";
import {Tour} from "./tour";
import {HotelService} from "./hotelservice";

export class ServiceItems {
    private _hotel: HotelService;
    private _Tours: Tour[];
    private _Flight: Flight;
    private _Transfer: Transfer;
    private _Insurance: Insurance;

    constructor(hotel: HotelService, Tours: Tour[], Flight: Flight, Transfer: Transfer, Insurance: Insurance) {
        this._hotel = hotel;
        this._Tours = Tours;
        this._Flight = Flight;
        this._Transfer = Transfer;
        this._Insurance = Insurance;
    }

    get hotel(): HotelService {
        return this._hotel;
    }

    set hotel(value: HotelService) {
        this._hotel = value;
    }

    get Tours(): Tour[] {
        return this._Tours;
    }

    set Tours(value: Tour[]) {
        this._Tours = value;
    }

    get Flight(): Flight {
        return this._Flight;
    }

    set Flight(value: Flight) {
        this._Flight = value;
    }

    get Transfer(): Transfer {
        return this._Transfer;
    }

    set Transfer(value: Transfer) {
        this._Transfer = value;
    }

    get Insurance(): Insurance {
        return this._Insurance;
    }

    set Insurance(value: Insurance) {
        this._Insurance = value;
    }
}