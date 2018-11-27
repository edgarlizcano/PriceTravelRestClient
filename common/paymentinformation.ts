import {CreditCardInformation} from "./creditcartinformation";

export class PaymentInformation {
    private _PaymentMethod: number;
    private _CreditCardInformation: CreditCardInformation;

    constructor(PaymentMethod: number, CreditCardInformation: CreditCardInformation) {
        this._PaymentMethod = PaymentMethod;
        this._CreditCardInformation = CreditCardInformation;
    }

    get PaymentMethod(): number {
        return this._PaymentMethod;
    }

    set PaymentMethod(value: number) {
        this._PaymentMethod = value;
    }

    get CreditCardInformation(): CreditCardInformation {
        return this._CreditCardInformation;
    }

    set CreditCardInformation(value: CreditCardInformation) {
        this._CreditCardInformation = value;
    }
}