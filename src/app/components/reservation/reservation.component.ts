import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { AccommodationDTO } from '../shared/models/accommodation.model';
import { AddReservation } from '../shared/models/addReservation.model';
import { StayVacationServiceService } from '../shared/services/stay-vacation-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit, OnDestroy {
  accommodationDetails!: AccommodationDTO | null;
  form!: FormGroup | null;
  id!: string | null;
  subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private _stayVacationService: StayVacationServiceService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.subscription = this._stayVacationService
      .getAccommodationDetails(this.id!)
      .subscribe((res) => (this.accommodationDetails = res));

    this.initForm();
  }

  openDialog() {
    this.dialog.open(DialogConfirmComponent);
  }

  onSubmit() {
    const reservation = new AddReservation(
      this.form?.value.email,
      this.id,
      this.form?.value.checkIn,
      this.form?.value.checkOut,
      this.form?.value.personCount,
      this.form?.value.confirmed
    );

    this.subscription = this._stayVacationService.createReservation(reservation).subscribe();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: [],
      email: [],
      checkIn: [],
      checkOut: [],
      personCount: [],
      confirmed: [true],
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
