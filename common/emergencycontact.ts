export class EmergencyContact {
    private _FirstName: string;
    private _LastName: string;
    private _PhoneNumber: string;
    private _Title: string;
    private _bool: boolean;

    constructor(FirstName: string, LastName: string, PhoneNumber: string, Title: string, bool: boolean) {
        this._FirstName = FirstName;
        this._LastName = LastName;
        this._PhoneNumber = PhoneNumber;
        this._Title = Title;
        this._bool = bool;
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

    get PhoneNumber(): string {
        return this._PhoneNumber;
    }

    set PhoneNumber(value: string) {
        this._PhoneNumber = value;
    }

    get Title(): string {
        return this._Title;
    }

    set Title(value: string) {
        this._Title = value;
    }

    get bool(): boolean {
        return this._bool;
    }

    set bool(value: boolean) {
        this._bool = value;
    }
}