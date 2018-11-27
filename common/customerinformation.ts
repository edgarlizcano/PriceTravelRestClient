export class CustomerInformation {
    private _FirstName: string;
    private _LastName: string;
    private _Email: string;
    private _Phone: string;
    private _MobilePhone: string;

    constructor(FirstName: string, LastName: string, Email: string, Phone: string, MobilePhone: string) {
        this._FirstName = FirstName;
        this._LastName = LastName;
        this._Email = Email;
        this._Phone = Phone;
        this._MobilePhone = MobilePhone;
    }

    get FirstName(): string {
        return this._FirstName;
    }

    set FirstName(value: string) {
        this._FirstName = value;
    }

    get LastName(): string {
        return this._LastName;
    }

    set LastName(value: string) {
        this._LastName = value;
    }

    get Email(): string {
        return this._Email;
    }

    set Email(value: string) {
        this._Email = value;
    }

    get Phone(): string {
        return this._Phone;
    }

    set Phone(value: string) {
        this._Phone = value;
    }

    get MobilePhone(): string {
        return this._MobilePhone;
    }

    set MobilePhone(value: string) {
        this._MobilePhone = value;
    }
}