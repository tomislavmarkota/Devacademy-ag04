import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './components/shared/app-routing.module';
import { SharedModule } from './modules/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './components/filter/filter.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MyPlacesComponent } from './components/my-places/my-places.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LocationsService } from './components/shared/services/locations.service';
import { AccomodationsService } from './components/shared/services/accomodations.service';
import { AllLocationsComponent } from './components/all-locations/all-locations.component';
import { MaterialModule } from './modules/material.module';
import { MyAccommodationFormComponent } from './components/my-accommodation-form/my-accommodation-form.component';
import { LocationComponent } from './components/location/location.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationPickerComponent } from './components/shared/location-picker/location-picker.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/auth-guard/auth-guard.guard';
import { AuthService } from './components/shared/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AllLocationsComponent,
    FavoritesComponent,
    RecommendationsComponent,
    FooterComponent,
    FilterComponent,
    MyPlacesComponent,
    MyBookingsComponent,
    HomepageComponent,
    MyAccommodationFormComponent,
    LocationComponent,
    ApartmentDetailsComponent,
    ReservationComponent,
    LocationPickerComponent,
    DialogDeleteComponent,
    DialogConfirmComponent,
    SearchResultsComponent,
    LoginComponent
  ],
  entryComponents: [DialogDeleteComponent, DialogConfirmComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LocationsService, AccomodationsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
