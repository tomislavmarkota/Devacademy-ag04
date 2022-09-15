import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AccommodationDTO } from '../models/accommodation.model';

@Injectable({
  providedIn: 'root'
})
export class AccomodationsService {

  accomodationsChange = new Subject<AccommodationDTO[]>();
  accomodations: AccommodationDTO[] = [];


  setAccommodation(accommodations: AccommodationDTO[]){
    this.accomodations = accommodations;
    this.accomodationsChange.next(this.accomodations)
  }

 

  updateAccommodation(id: string, newAccommodation: AccommodationDTO){
    const index = this.accomodations.findIndex((accommodation) => {
      return accommodation.id === id
    })
    if(index !== -1){
      this.accomodations[index] = newAccommodation;
    }
  }

}
