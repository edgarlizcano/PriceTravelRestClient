export class KidsCriteria {
    private _KidsRateCriteria: number;
    private _MinKidValue: number;
    private _MaxKidValue: number;

    constructor(KidsRateCriteria: number, MinKidValue: number, MaxKidValue: number) {
        this._KidsRateCriteria = KidsRateCriteria;
        this._MinKidValue = MinKidValue;
        this._MaxKidValue = MaxKidValue;
    }

    get KidsRateCriteria(): number {
        return this._KidsRateCriteria;
    }

    set KidsRateCriteria(value: number) {
        this._KidsRateCriteria = value;
    }

    get MinKidValue(): number {
        return this._MinKidValue;
    }

    set MinKidValue(value: number) {
        this._MinKidValue = value;
    }

    get MaxKidValue(): number {
        return this._MaxKidValue;
    }

    set MaxKidValue(value: number) {
        this._MaxKidValue = value;
    }
}