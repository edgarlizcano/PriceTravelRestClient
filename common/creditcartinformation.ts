export class CreditCardInformation {
    private _Type: number;
    private _Number: string;
    private _ExpirationMonth: number;
    private _ExpirationYear: number;
    private _SecurityCode: string;
    private _CardHolderName: string;
    private _Street: string;
    private _City: string;
    private _State: string;
    private _CountryCode: string;
    private _ZipCode: string;
    private _PaymentPlan: number;
    private _Surcharge: number;
    private _BankName: string;


    constructor(Type: number, Number: string, ExpirationMonth: number, ExpirationYear: number, SecurityCode: string, CardHolderName: string, Street: string, City: string, State: string, CountryCode: string, ZipCode: string, PaymentPlan: number, Surcharge: number, BankName: string) {
        this._Type = Type;
        this._Number = Number;
        this._ExpirationMonth = ExpirationMonth;
        this._ExpirationYear = ExpirationYear;
        this._SecurityCode = SecurityCode;
        this._CardHolderName = CardHolderName;
        this._Street = Street;
        this._City = City;
        this._State = State;
        this._CountryCode = CountryCode;
        this._ZipCode = ZipCode;
        this._PaymentPlan = PaymentPlan;
        this._Surcharge = Surcharge;
        this._BankName = BankName;
    }

    get Type(): number {
        return this._Type;
    }

    set Type(value: number) {
        this._Type = value;
    }

    get Number(): string {
        return this._Number;
    }

    set Number(value: string) {
        this._Number = value;
    }

    get ExpirationMonth(): number {
        return this._ExpirationMonth;
    }

    set ExpirationMonth(value: number) {
        this._ExpirationMonth = value;
    }

    get ExpirationYear(): number {
        return this._ExpirationYear;
    }

    set ExpirationYear(value: number) {
        this._ExpirationYear = value;
    }

    get SecurityCode(): string {
        return this._SecurityCode;
    }

    set SecurityCode(value: string) {
        this._SecurityCode = value;
    }

    get CardHolderName(): string {
        return this._CardHolderName;
    }

    set CardHolderName(value: string) {
        this._CardHolderName = value;
    }

    get Street(): string {
        return this._Street;
    }

    set Street(value: string) {
        this._Street = value;
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

    get ZipCode(): string {
        return this._ZipCode;
    }

    set ZipCode(value: string) {
        this._ZipCode = value;
    }

    get PaymentPlan(): number {
        return this._PaymentPlan;
    }

    set PaymentPlan(value: number) {
        this._PaymentPlan = value;
    }

    get Surcharge(): number {
        return this._Surcharge;
    }

    set Surcharge(value: number) {
        this._Surcharge = value;
    }

    get BankName(): string {
        return this._BankName;
    }

    set BankName(value: string) {
        this._BankName = value;
    }
}