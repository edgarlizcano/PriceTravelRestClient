export class MapInfo {
    private _centerX: string;
    private _centerY: string;
    private _mapType: string;
    private _description: string;
    private _markerX: string;
    private _markerY: string;
    private _name: string;
    private _pointType: number;
    private _tourId: number;
    private _zoomLevel: number;

    constructor(centerX: string, centerY: string, mapType: string, description: string, markerX: string, markerY: string, name: string, pointType: number, tourId: number, zoomLevel: number) {
        this._centerX = centerX;
        this._centerY = centerY;
        this._mapType = mapType;
        this._description = description;
        this._markerX = markerX;
        this._markerY = markerY;
        this._name = name;
        this._pointType = pointType;
        this._tourId = tourId;
        this._zoomLevel = zoomLevel;
    }

    get centerX(): string {
        return this._centerX;
    }

    set centerX(value: string) {
        this._centerX = value;
    }

    get centerY(): string {
        return this._centerY;
    }

    set centerY(value: string) {
        this._centerY = value;
    }

    get mapType(): string {
        return this._mapType;
    }

    set mapType(value: string) {
        this._mapType = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get markerX(): string {
        return this._markerX;
    }

    set markerX(value: string) {
        this._markerX = value;
    }

    get markerY(): string {
        return this._markerY;
    }

    set markerY(value: string) {
        this._markerY = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get pointType(): number {
        return this._pointType;
    }

    set pointType(value: number) {
        this._pointType = value;
    }

    get tourId(): number {
        return this._tourId;
    }

    set tourId(value: number) {
        this._tourId = value;
    }

    get zoomLevel(): number {
        return this._zoomLevel;
    }

    set zoomLevel(value: number) {
        this._zoomLevel = value;
    }
}