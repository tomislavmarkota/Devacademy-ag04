import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  Accommodation,
  AccommodationDTO,
  AccomodationType,
} from '../shared/models/accommodation.model';
import { LocationDTO, Location } from '../shared/models/location.model';
import { StayVacationServiceService } from '../shared/services/stay-vacation-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-my-accommodation-form',
  templateUrl: './my-accommodation-form.component.html',
  styleUrls: ['./my-accommodation-form.component.scss'],
})
export class MyAccommodationFormComponent implements OnInit, OnDestroy {
  form: FormGroup | null = null;
  selectedAccommodation: AccomodationType | null = null;
  id: string | null = null;
  locations$!: Observable<LocationDTO[] | null>;

  private subscription: Subscription = new Subscription();

  accommodationsType = ['Room', 'Suite', 'Apartment', 'Mobile home'];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _stayVacationService: StayVacationServiceService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.locations$ = this._stayVacationService.getLocations();

    this.initForm();
    if (this.id) {
      this.fillForm();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setCategorization(star: number): void {
    this.form?.controls['categorization'].setValue(star);
  }

  onLocationChange(location: LocationDTO){
    this.form?.controls['location'].setValue(location);
  }

  onSubmit() {
    if (this.id) {
      const accommodationUpdate: AccommodationDTO = new Accommodation(
        this.id,
        this.form?.value.capacity,
        this.form?.value.title,
        null,
        this.form?.value.shortDesc,
        this.form?.value.longDesc,
        this.form?.value.accommodationType,
        this.form?.value.categorization,
        null,
        this.form?.value.imageUrl,
        this.form?.value.cancelation,
        this.form?.value.price,
        this.id
      );
      const subscription = this._stayVacationService
        .updateAccomodations(this.id, accommodationUpdate)
        .subscribe();
      this.subscription.add(subscription);
    } else {
      const accommodation: AccommodationDTO = new Accommodation(
        this.id,
        this.form?.value.capacity,
        this.form?.value.title,
        null,
        this.form?.value.shortDesc,
        this.form?.value.longDesc,
        this.form?.value.accommodationType,
        this.form?.value.categorization,
        null,
        this.form?.value.imageUrl,
        this.form?.value.cancelation,
        this.form?.value.price,
        this.id,
        this.form?.value.location
      );
      
      const subscription = this._stayVacationService
        .createAccomodation(accommodation)
        .subscribe();
      this.subscription.add(subscription);
    }
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      title: [null],
      shortDesc: [null],
      longDesc: [null],
      categorization: [null],
      accommodationType: [null],
      capacity: [null],
      price: [null],
      location: [null],
      postalCode: [null],
      imageUrl: [null],
      cancelation: [null],
    });
  }

  private fillForm() {
    const subscription = this._stayVacationService
      .getAccommodationDetails(this.id)
      .subscribe((res) => {
        this.form?.controls['title'].setValue(res?.title);
        this.form?.controls['shortDesc'].setValue(res?.subtitle);
        this.form?.controls['longDesc'].setValue(res?.description);
        this.form?.controls['categorization'].setValue(res?.categorization);
        this.form?.controls['accommodationType'].setValue(res?.type);
        this.form?.controls['capacity'].setValue(res?.capacity);
        this.form?.controls['price'].setValue(res?.price);
        this.form?.controls['location'].setValue(res?.location);
        this.form?.controls['postalCode'].setValue(res?.location?.postalCode);
        this.form?.controls['imageUrl'].setValue(res?.location?.imageUrl);
        this.form?.controls['cancelation'].setValue(res?.freeCancelation);
      });

    this.subscription.add(subscription);
  }
}
