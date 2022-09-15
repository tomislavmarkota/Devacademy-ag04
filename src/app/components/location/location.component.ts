import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { FilterSettings } from '../shared/filter.interface';
import { AccommodationDTO } from '../shared/models/accommodation.model';
import { AccomodationsService } from '../shared/services/accomodations.service';
import { StayVacationServiceService } from '../shared/services/stay-vacation-service.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  id: string | null = null;
  locations$!: Observable<AccommodationDTO[] | null>;
  

  readonly filterSettings: FilterSettings = {
    where: false,
    checkIn: true,
    checkOut: true,
    howMany: true,
    typeofAccommodation: true,
    submitBtn: true
  };

  constructor(
    private route: ActivatedRoute,
    private _stayVacationService: StayVacationServiceService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.locations$ = this._stayVacationService.getLocationsById(this.id!)
  }

}
