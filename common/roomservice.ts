export class RoomService {
    private _Adults: number;
    private _ChildAges: number[];

    constructor(Adults: number, ChildAges: number[]) {
        this._Adults = Adults;
        this._ChildAges = ChildAges;
    }

    get Adults(): number {
        return this._Adults;
    }

    set Adults(value: number) {
        this._Adults = value;
    }

    get ChildAges(): number[] {
        return this._ChildAges;
    }

    set ChildAges(value: number[]) {
        this._ChildAges = value;
    }
}