import {ReturningFlights} from "./returningflights";
import {DepartureFlights} from "./departureflights";

export class Flights {
    private _DepartureFlights: DepartureFlights;
    private _ReturningFlights: ReturningFlights;

    constructor(DepartureFlights: DepartureFlights, ReturningFlights: ReturningFlights) {
        this._DepartureFlights = DepartureFlights;
        this._ReturningFlights = ReturningFlights;
    }

    get DepartureFlights(): DepartureFlights {
        return this._DepartureFlights;
    }

    set DepartureFlights(value: DepartureFlights) {
        this._DepartureFlights = value;
    }

    get ReturningFlights(): ReturningFlights {
        return this._ReturningFlights;
    }

    set ReturningFlights(value: ReturningFlights) {
        this._ReturningFlights = value;
    }
}