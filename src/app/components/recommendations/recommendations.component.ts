import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterSettings } from '../shared/filter.interface';
import { AccommodationDTO } from '../shared/models/accommodation.model';
import { AccomodationsService } from '../shared/services/accomodations.service';
import { StayVacationServiceService } from '../shared/services/stay-vacation-service.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
  accomodations!: Observable<AccommodationDTO[] | null>;

  readonly filterSettings: FilterSettings = {
    where: false,
    checkIn: true,
    checkOut: true,
    howMany: true,
    typeofAccommodation: true,
    submitBtn: true
  };

  constructor(
    private _accomodationsService: AccomodationsService,
    private _stayVacationService: StayVacationServiceService
    ){

  }

  ngOnInit(): void {
    
    this.accomodations = this._stayVacationService.getRecommendations();
  }

}
