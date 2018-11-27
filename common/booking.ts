import {CustomerInformation} from "./customerinformation";
import {Items} from "./items";

export class Booking {
    private _Id: string;
    private _CustomerInformation: CustomerInformation;
    private _Items: Items;

    constructor(Id: string, CustomerInformation: CustomerInformation, Items: Items) {
        this._Id = Id;
        this._CustomerInformation = CustomerInformation;
        this._Items = Items;
    }

    get Id(): string {
        return this._Id;
    }

    set Id(value: string) {
        this._Id = value;
    }

    get CustomerInformation(): CustomerInformation {
        return this._CustomerInformation;
    }

    set CustomerInformation(value: CustomerInformation) {
        this._CustomerInformation = value;
    }

    get Items(): Items {
        return this._Items;
    }

    set Items(value: Items) {
        this._Items = value;
    }
}