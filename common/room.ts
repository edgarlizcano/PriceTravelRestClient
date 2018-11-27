import {Amenity} from "./amenity";

export class Room {
    Amenities: Amenity[];
    Id: number;
    ThumbnailUri: string;
    Name: string;
    MaximumRoomOccupancy: number;
    MaximumMinorOccupancy: number;
    MaximumAdultOccupancy: number;
    MaximumJuniorOccupancy: number;
    MinimumGuestAge: number;
    AgeKidsUpTo: number;
    AgeKidsFreeFrom: number;
    AgeKidsFreeTo: number;
    CheckInTime: string;
    CheckOutTime: string;
    Bedding: string;
    RoomView: string;
}