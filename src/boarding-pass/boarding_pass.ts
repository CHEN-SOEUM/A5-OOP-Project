import { Airplane } from "../airplane/airplane";

export class BoardingPass {
    private _boarding_id: string;
    private _plane: Airplane;
    private _country_code: string;
    constructor(boarding_id: string, plane: Airplane, country_code: string) {
        this._boarding_id = boarding_id;
        this._plane = plane;
        this._country_code = country_code;
    }

    public getPlane(): Airplane {
        return this._plane;
    }

    public getBoardingId(): string {
        return this._boarding_id;
    }

    public getCountryCode(): string {
        return this._country_code;
    }
}