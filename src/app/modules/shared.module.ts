import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocationBoxComponent } from '../components/shared/location-box/location-box.component';
import { ApartmentBoxComponent } from '../components/shared/accommodation-box/accommodation-box.component';
import { AppRoutingModule } from '../components/shared/app-routing.module';
import { StarsComponent } from '../components/stars/stars.component';

@NgModule({
  declarations: [LocationBoxComponent, ApartmentBoxComponent, StarsComponent ],
  imports: [CommonModule, AppRoutingModule],
  exports: [CommonModule, LocationBoxComponent, ApartmentBoxComponent, StarsComponent ],
})
export class SharedModule {}
