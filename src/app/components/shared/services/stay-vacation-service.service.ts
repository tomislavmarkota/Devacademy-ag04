import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LocationDTO } from '../models/location.model';
import {
  AccommodationDTO,
  AccomodationType,
} from '../models/accommodation.model';
import { AddReservationDTO } from '../models/addReservation.model';
import { ReservationDTO } from '../models/reservationDTO.model';
import { environment } from 'src/environments/environment';
import { AccomodationsService } from './accomodations.service';

@Injectable({
  providedIn: 'root',
})
export class StayVacationServiceService {
  constructor(
    private http: HttpClient,
    private accomodationsService: AccomodationsService
  ) {}

  getLocations(): Observable<LocationDTO[] | null> {
    const url: string = `${environment.appUrl}Location`;

    return this.http
      .get<LocationDTO[] | null>(url, {
        observe: 'response',
      })
      .pipe(map((res) => res.body));
  }

  getLocationsById(id: string): Observable<AccommodationDTO[] | null> {
    const url = `${environment.appUrl}Accomodations/location?locationId=${id}`;

    return this.http
      .get<AccommodationDTO[] | null>(url, { observe: 'response' })
      .pipe(map((res) => res.body));
  }

  getAccommodations() {
    const url = `${environment.appUrl}Accomodations`;

    return this.http
      .get<AccommodationDTO[] | null>(url, {
        observe: 'response',
      })
      .pipe(map((res) => res.body));
  }

  updateAccomodations(id:string, newAccomodation: AccommodationDTO){
    const url = `${environment.appUrl}Accomodations/${id}`;

    return this.http.put(url, newAccomodation)
  }

  filterAccommodation(
    id: string,
    count: number,
    type: string,
    checkIn: string,
    checkOut: string
  ) {
    const urlAccomodations = `${environment.appUrl}Accomodations`;
    const urlReservations = `${environment.appUrl}Reservation`;
    let filtered: any[] = [];

    this.http
      .get<AccommodationDTO[] | null>(urlAccomodations, {
        observe: 'response',
      })
      .pipe(map((res) => res.body))
      .subscribe((data) => {
        filtered.push(...data!);

        if (id) {
          filtered = filtered.filter(
            (accomodation) => accomodation.locationID === id
          );
        }

        if (count) {
          filtered = filtered.filter(
            (accomodation) => accomodation.capacity! >= count
          );
        }

        if (type) {
          filtered = filtered.filter(
            (accomodation) => accomodation.type === type
          );
        }
        this.accomodationsService.setAccommodation(filtered);
      });

    console.log(filtered);

    if (checkIn || checkOut) {
      this.http
        .get<ReservationDTO[] | null>(urlReservations, { observe: 'response' })
        .pipe(map((res) => res.body))
        .subscribe((data) => {

          if (checkIn) {
            filtered.push(...data!);
            filtered = filtered.filter(
              (accomodation) =>
                new Date(accomodation.checkIn!) >= new Date(checkIn)
            );
          }
          if (checkOut) {
            filtered = filtered.filter(
              (accomodation) =>
                new Date(accomodation.checkIn!) <= new Date(checkIn)
            );
          }
          this.accomodationsService.setAccommodation(filtered);
        });
    }
  }

  getAccommodationDetails(id: string | null): Observable<AccommodationDTO | null> {
    const url = `${environment.appUrl}Accomodations/${id}`;

    return this.http
      .get<AccommodationDTO | null>(url, {
        observe: 'response',
      })
      .pipe(map((res) => res.body));
  }

  deleteAccomodation(id: string | null) {
    const url = `${environment.appUrl}Accomodations/${id}`;

    return this.http.delete(url);
  }

  getRecommendations(): Observable<AccommodationDTO[] | null> {
    const url: string = `${environment.appUrl}Accomodations/recommendation`;

    return this.http
      .get<AccommodationDTO[] | null>(url, {
        observe: 'response',
      })
      .pipe(map((res) => res.body));
  }

  getReservations(): Observable<ReservationDTO[] | null> {
    const url: string = `${environment.appUrl}Reservation`;

    return this.http
      .get<ReservationDTO[] | null>(url, {
        observe: 'response',
      })
      .pipe(map((res) => res.body));
  }

  createReservation(reservation: AddReservationDTO | null) {
    const url = `${environment.appUrl}Reservation`;

    return this.http.post<ReservationDTO>(url, reservation);
  }

  createAccomodation(accomodation: AccommodationDTO) {
    const url = `${environment.appUrl}Accomodations`;

    return this.http.post<AccommodationDTO>(url, accomodation);
  }
}
