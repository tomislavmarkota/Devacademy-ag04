import { AccommodationDTO } from './accommodation.model';

export interface ReservationDTO {
  id: string | null;
  email: string | null;
  accomodationId: string | null;
  accomodation: AccommodationDTO | null;
  checkIn: string | null;
  checkOut: string | null;
  personCount: number | null;
  confirmed: boolean | null;
}

export class Reservation implements ReservationDTO {
  constructor(
    public id: string | null,
    public email: string | null,
    public accomodationId: string | null,
    public accomodation: AccommodationDTO | null,
    public checkIn: string | null,
    public checkOut: string | null,
    public personCount: number | null,
    public confirmed: boolean | null
  ) {}
}
