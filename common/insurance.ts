export class Insurance {
    private _Currency: string;
    private _Amount: number;
    private _InsuranceType: number;
    private _InsuranceItemId: number;
    private _InsuranceRateId: number;
    private _Name: string;
    private _Description: string;
    private _IsDefault: boolean;
    private _Adults: number;
    private _Kids: number;
    private _StartDate: string;
    private _EndDate: string;
    private _TotalAmount: number;
    private _Type: number;

    constructor(Currency: string, Amount: number, InsuranceType: number, InsuranceItemId: number, InsuranceRateId: number, Name: string, Description: string, IsDefault: boolean, Adults: number, Kids: number, StartDate: string, EndDate: string, TotalAmount: number, Type: number) {
        this._Currency = Currency;
        this._Amount = Amount;
        this._InsuranceType = InsuranceType;
        this._InsuranceItemId = InsuranceItemId;
        this._InsuranceRateId = InsuranceRateId;
        this._Name = Name;
        this._Description = Description;
        this._IsDefault = IsDefault;
        this._Adults = Adults;
        this._Kids = Kids;
        this._StartDate = StartDate;
        this._EndDate = EndDate;
        this._TotalAmount = TotalAmount;
        this._Type = Type;
    }

    get Currency(): string {
        return this._Currency;
    }

    set Currency(value: string) {
        this._Currency = value;
    }

    get Amount(): number {
        return this._Amount;
    }

    set Amount(value: number) {
        this._Amount = value;
    }

    get InsuranceType(): number {
        return this._InsuranceType;
    }

    set InsuranceType(value: number) {
        this._InsuranceType = value;
    }

    get InsuranceItemId(): number {
        return this._InsuranceItemId;
    }

    set InsuranceItemId(value: number) {
        this._InsuranceItemId = value;
    }

    get InsuranceRateId(): number {
        return this._InsuranceRateId;
    }

    set InsuranceRateId(value: number) {
        this._InsuranceRateId = value;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get Description(): string {
        return this._Description;
    }

    set Description(value: string) {
        this._Description = value;
    }

    get IsDefault(): boolean {
        return this._IsDefault;
    }

    set IsDefault(value: boolean) {
        this._IsDefault = value;
    }

    get Adults(): number {
        return this._Adults;
    }

    set Adults(value: number) {
        this._Adults = value;
    }

    get Kids(): number {
        return this._Kids;
    }

    set Kids(value: number) {
        this._Kids = value;
    }

    get StartDate(): string {
        return this._StartDate;
    }

    set StartDate(value: string) {
        this._StartDate = value;
    }

    get EndDate(): string {
        return this._EndDate;
    }

    set EndDate(value: string) {
        this._EndDate = value;
    }

    get TotalAmount(): number {
        return this._TotalAmount;
    }

    set TotalAmount(value: number) {
        this._TotalAmount = value;
    }

    get Type(): number {
        return this._Type;
    }

    set Type(value: number) {
        this._Type = value;
    }
}