import { Component, Input, OnInit } from '@angular/core';
import { FilterSettings } from '../shared/filter.interface';
import { AccommodationDTO } from '../shared/models/accommodation.model';
import { LocationDTO } from '../shared/models/location.model';
import { AccomodationsService } from '../shared/services/accomodations.service';
import { LocationsService } from '../shared/services/locations.service';
import { StayVacationServiceService } from '../shared/services/stay-vacation-service.service';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  locations$!: Observable<LocationDTO[] | null>;
  accomodations$!: Observable<AccommodationDTO[] | null>;
  

  readonly filterSettings: FilterSettings = {
    where: true,
    checkIn: true,
    checkOut: true,
    howMany: true,
    typeofAccommodation: true,
    submitBtn: true,
  };

  constructor(
    private _stayVacationService: StayVacationServiceService,
    private authService:AuthService
    ) {

  }

  ngOnInit(): void {
    this.locations$ = this._stayVacationService.getLocations();
    this.authService.isAuth(localStorage.getItem('token'))
    this.accomodations$ = this._stayVacationService.getRecommendations();
  }
}
