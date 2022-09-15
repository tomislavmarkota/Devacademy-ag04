import { Component, Input } from '@angular/core';
import { Location, LocationDTO } from '../models/location.model';

@Component({
  selector: 'app-location-box',
  templateUrl: './location-box.component.html',
  styleUrls: ['./location-box.component.scss']
})
export class LocationBoxComponent {
  @Input() location:LocationDTO = new Location(null, null, null, null, null);

 


}
