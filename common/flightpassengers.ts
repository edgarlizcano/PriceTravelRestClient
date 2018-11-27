export class FlightPassengers {
    private _Title: string;
    private _Names: string;
    private _LastNames: string;
    private _PassengerIndex: number;
    private _RequireAdditionalUsaInformation: boolean;
    private _Sex: number;
    private _Type: number;
    private _BirthDateDay: number;
    private _BirthDateMonth: number;
    private _BirthDateYear: number;
    private _FrequentFlyerNumber: string;
    private _FrequentFlyerProgram: string;
    private _ExtraServicesCodes: string;

    constructor(Title: string, Names: string, LastNames: string, PassengerIndex: number, RequireAdditionalUsaInformation: boolean, Sex: number, Type: number, BirthDateDay: number, BirthDateMonth: number, BirthDateYear: number, FrequentFlyerNumber: string, FrequentFlyerProgram: string, ExtraServicesCodes: string) {
        this._Title = Title;
        this._Names = Names;
        this._LastNames = LastNames;
        this._PassengerIndex = PassengerIndex;
        this._RequireAdditionalUsaInformation = RequireAdditionalUsaInformation;
        this._Sex = Sex;
        this._Type = Type;
        this._BirthDateDay = BirthDateDay;
        this._BirthDateMonth = BirthDateMonth;
        this._BirthDateYear = BirthDateYear;
        this._FrequentFlyerNumber = FrequentFlyerNumber;
        this._FrequentFlyerProgram = FrequentFlyerProgram;
        this._ExtraServicesCodes = ExtraServicesCodes;
    }

    get Title(): string {
        return this._Title;
    }

    set Title(value: string) {
        this._Title = value;
    }

    get Names(): string {
        return this._Names;
    }

    set Names(value: string) {
        this._Names = value;
    }

    get LastNames(): string {
        return this._LastNames;
    }

    set LastNames(value: string) {
        this._LastNames = value;
    }

    get PassengerIndex(): number {
        return this._PassengerIndex;
    }

    set PassengerIndex(value: number) {
        this._PassengerIndex = value;
    }

    get RequireAdditionalUsaInformation(): boolean {
        return this._RequireAdditionalUsaInformation;
    }

    set RequireAdditionalUsaInformation(value: boolean) {
        this._RequireAdditionalUsaInformation = value;
    }

    get Sex(): number {
        return this._Sex;
    }

    set Sex(value: number) {
        this._Sex = value;
    }

    get Type(): number {
        return this._Type;
    }

    set Type(value: number) {
        this._Type = value;
    }

    get BirthDateDay(): number {
        return this._BirthDateDay;
    }

    set BirthDateDay(value: number) {
        this._BirthDateDay = value;
    }

    get BirthDateMonth(): number {
        return this._BirthDateMonth;
    }

    set BirthDateMonth(value: number) {
        this._BirthDateMonth = value;
    }

    get BirthDateYear(): number {
        return this._BirthDateYear;
    }

    set BirthDateYear(value: number) {
        this._BirthDateYear = value;
    }

    get FrequentFlyerNumber(): string {
        return this._FrequentFlyerNumber;
    }

    set FrequentFlyerNumber(value: string) {
        this._FrequentFlyerNumber = value;
    }

    get FrequentFlyerProgram(): string {
        return this._FrequentFlyerProgram;
    }

    set FrequentFlyerProgram(value: string) {
        this._FrequentFlyerProgram = value;
    }

    get ExtraServicesCodes(): string {
        return this._ExtraServicesCodes;
    }

    set ExtraServicesCodes(value: string) {
        this._ExtraServicesCodes = value;
    }
}