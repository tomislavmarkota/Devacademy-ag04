import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccommodationDTO } from '../shared/models/accommodation.model';
import { StayVacationServiceService } from '../shared/services/stay-vacation-service.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.scss']
})
export class ApartmentDetailsComponent implements OnInit, OnDestroy {
  id:string | null = null;
  accommodationDetails!: AccommodationDTO | null;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _stayVacationService: StayVacationServiceService
    ){

  }

  


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.subscription = this._stayVacationService.getAccommodationDetails(this.id!).subscribe((res:any) => this.accommodationDetails = res)
    
    this.subscription.add();

  }

  
  navigateToReservation():void {
    this.router.navigate(['../reservation', this.id])
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 

}
