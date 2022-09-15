import { Injectable } from '@angular/core';
import { LocationDTO } from '../models/location.model';

@Injectable({
    providedIn: 'root'
  })
export class LocationsService {
  locations: LocationDTO[] = [
    {
      id: '0f29d778-0592-43cb-a21c-a4aa6a4c7997',
      name: 'Vukovar',
      imageUrl: 'https://static.dw.com/image/17075889_303.jpg',
      postalCode: 32000,
      properties: null
    },
    {
      id: '9544585e-bd71-4a15-9591-67ecc8374e5d',
      name: 'Zagreb',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Zagreb_%2829255640143%29.jpg/420px-Zagreb_%2829255640143%29.jpg',
      postalCode: 10000,
      properties: null
    },
    {
      id: 'e80b2420-69da-4426-83b5-9acdde15a32c',
      name: 'Pozega',
      imageUrl: 'https://www.pozega.hr/images/stranica/rotate/108.jpg',
      postalCode: 34000,
      properties: null
    },
    {
      id: '0f29d778-0592-43cb-a21c-a4aa6a4c7997',
      name: 'Vukovar',
      imageUrl: 'https://static.dw.com/image/17075889_303.jpg',
      postalCode: 32000,
      properties: null
    }
  ];

  getLocations(){
    return this.locations;
  }
}
