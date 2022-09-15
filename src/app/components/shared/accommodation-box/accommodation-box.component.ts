import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accommodation, AccommodationDTO } from '../models/accommodation.model';

@Component({
  selector: 'app-accommodation-box',
  templateUrl: './accommodation-box.component.html',
  styleUrls: ['./accommodation-box.component.scss']
})
export class ApartmentBoxComponent implements OnInit {
  @Input() accommodation: AccommodationDTO = new Accommodation(null,null,null,null,null,null,null,null,null,null,null,null,null,null)
  @Input() id: string | null = null;


  ngOnInit(): void {
    
  }



}
