export interface AddReservationDTO {
  email: string | null;
  accomodationId: string | null;
  checkIn: string | null;
  checkOut: string | null;
  personCount: number | null;
  confirmed: boolean | null;
}

export class AddReservation implements AddReservationDTO {
    constructor(
        public email: string | null,
        public accomodationId: string | null,
        public checkIn: string | null,
        public checkOut: string | null,
        public personCount: number | null,
        public confirmed: boolean | null
    ){ }
}
