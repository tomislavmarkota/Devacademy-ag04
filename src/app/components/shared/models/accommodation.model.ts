import { LocationDTO } from './location.model';
export enum AccomodationType {
  room = 'Room',
  suite = 'Suite',
  apartment = 'Apartment',
  mobileHome = 'Mobile home',
}

export interface AccommodationDTO {
  id: string | null;
  capacity: number | null;
  title: string | null;
  subtitle: string | null;
  shortDescription: string | null;
  description: string | null;
  type: AccomodationType | string | null;
  categorization: number | null;
  personCount: number | null;
  imageUrl: string | null;
  freeCancelation: boolean | null;
  price: number | null;
  locationID: string | null;
  location?: LocationDTO | null;
}

export class Accommodation implements AccommodationDTO {
  constructor(
    public id: string | null,
    public capacity: number | null,
    public title: string | null,
    public subtitle: string | null,
    public shortDescription: string | null,
    public description: string | null,
    public type: AccomodationType | string | null,
    public categorization: number | null,
    public personCount: number | null,
    public imageUrl: string | null,
    public freeCancelation: boolean | null,
    public price: number | null,
    public locationID: string | null,
    public location?: LocationDTO | null
  ) {}
}
