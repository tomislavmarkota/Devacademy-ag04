import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AccommodationDTO } from '../shared/models/accommodation.model';
import { ReservationDTO } from '../shared/models/reservationDTO.model';
import { AccomodationsService } from '../shared/services/accomodations.service';
import { StayVacationServiceService } from '../shared/services/stay-vacation-service.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
})
export class MyBookingsComponent implements OnInit {

  upcomingBookings$!: Observable<ReservationDTO[] | null | undefined>;
  pastBookings$!: Observable<ReservationDTO[] | null | undefined>;

  readonly startDate: Date = new Date();

  constructor(private _stayVacationService: StayVacationServiceService){

  }

  ngOnInit(): void {
    
    this.upcomingBookings$ = this._stayVacationService.getReservations().pipe(map(arr => arr?.filter(value => new Date(value.checkIn!) >= this.startDate  )))
    
    this.pastBookings$ = this._stayVacationService.getReservations().pipe(map(arr => arr?.filter(value => new Date(value.checkIn!) < this.startDate  )))
  }
  
}
