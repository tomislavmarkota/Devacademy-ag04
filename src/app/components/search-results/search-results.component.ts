import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccommodationDTO } from '../shared/models/accommodation.model';
import { AccomodationsService } from '../shared/services/accomodations.service';
import { StayVacationServiceService } from '../shared/services/stay-vacation-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  accomodations!: AccommodationDTO[] | null;
  subscription: Subscription = new Subscription();

  constructor(
    private _stayVacationService: StayVacationServiceService,
    private accommodationService: AccomodationsService
  ) { }

  ngOnInit(): void {
    this.subscription = this.accommodationService.accomodationsChange.subscribe(data => this.accomodations = data)
    //this.accommodationService.accomodationsChange.subscribe(data => console.log(data))

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }



}
