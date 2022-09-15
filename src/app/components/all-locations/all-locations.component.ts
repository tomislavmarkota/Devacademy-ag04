import { Component, OnInit } from '@angular/core';
import { FilterSettings } from '../shared/filter.interface';
import { LocationDTO } from '../shared/models/location.model';
import { LocationsService } from '../shared/services/locations.service';
import { StayVacationServiceService } from '../shared/services/stay-vacation-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-locations',
  templateUrl: './all-locations.component.html',
  styleUrls: ['./all-locations.component.scss']
})
export class AllLocationsComponent implements OnInit {
  locations$!: Observable<LocationDTO[] | null >;

  readonly filterSettings: FilterSettings = {
    where: true,
    checkIn: false,
    checkOut: false,
    howMany: false,
    typeofAccommodation: false,
    submitBtn: true
  };

  constructor(private _stayVacationService: StayVacationServiceService){

  }

  ngOnInit(): void {
    this.locations$ = this._stayVacationService.getLocations();
    
  }

  
}
