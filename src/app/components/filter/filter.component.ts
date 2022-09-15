import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, map, filter } from 'rxjs';
import { FilterSettings } from '../shared/filter.interface';
import { LocationDTO } from '../shared/models/location.model';
import { StayVacationServiceService } from '../shared/services/stay-vacation-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() filterSettings: FilterSettings | null = null;
  locations!: LocationDTO[] | null;
  selectedLocation: string | null = null;
  selectedAccommodation: number | null = null;
  subscription: Subscription = new Subscription();
  filteredAccomodation!: any;
  form!: FormGroup | null;

  accommodationType = [
    { name: 'Apartment' },
    { name: 'Room' },
    { name: 'Suite' },
    { name: 'Mobile home' },
  ];

  constructor(
    private _stayVacationService: StayVacationServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.subscription = this._stayVacationService
      .getLocations()
      .subscribe((data) => {
        this.locations = data;
      });

    this.initForm();
  }

  onSubmit() {
    this.router.navigate(['search-list']);
    this._stayVacationService.filterAccommodation(
      this.form?.value.selectLocationId,
      this.form?.value.personCount,
      this.form?.value.type,
      this.form?.value.checkIn,
      this.form?.value.checkOut
    );
  }

  initForm() {
    this.form = this.formBuilder.group({
      selectLocationId: [],
      checkIn: [''],
      checkOut: [''],
      personCount: [''],
      type: [''],
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
