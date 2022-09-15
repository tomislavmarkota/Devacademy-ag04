import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccommodationDTO } from '../shared/models/accommodation.model';
import { AccomodationsService } from '../shared/services/accomodations.service';
import { StayVacationServiceService } from '../shared/services/stay-vacation-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss'],
})
export class MyPlacesComponent implements OnInit, OnDestroy {
  accommodations!: AccommodationDTO[] | null;
  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    public _accommodationService: AccomodationsService,
    private _stayVacationService: StayVacationServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscription = this._stayVacationService
      .getAccommodations()
      .subscribe((data) => (this.accommodations = data));
    this.subscription = this._stayVacationService
      .getAccommodations()
      .subscribe((data) => console.log(data));

    this.subscription.add();
  }

  onEditForm(id: string) {
    this.router.navigate(['../edit', id]);
  }


  openDialog(id: string | null) {
    let dialogRef = this.dialog.open(DialogDeleteComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        this.subscription = this._stayVacationService
          .deleteAccomodation(id)
          .subscribe(() => {
            this.subscription = this._stayVacationService
              .getAccommodations()
              .subscribe((data) => (this.accommodations = data));
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
