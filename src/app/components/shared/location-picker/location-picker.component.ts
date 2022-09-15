import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocationDTO } from '../models/location.model';
import { StayVacationServiceService } from '../services/stay-vacation-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {
  @Output() selectedLocation = new EventEmitter<LocationDTO>;
  locations$!: Observable<LocationDTO[] | null>;
  selected!: LocationDTO;

  constructor(private _stayVacationService: StayVacationServiceService) {}

  ngOnInit(): void {
    this.locations$ = this._stayVacationService.getLocations();
  }

  onChange() {
    this.selectedLocation.emit(this.selected);
  }
}
