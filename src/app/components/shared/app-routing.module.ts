import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { AllLocationsComponent } from '../all-locations/all-locations.component';
import { MyPlacesComponent } from '../my-places/my-places.component';
import { MyBookingsComponent } from '../my-bookings/my-bookings.component';
import { MyAccommodationFormComponent } from '../my-accommodation-form/my-accommodation-form.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';
import { LocationComponent } from '../location/location.component';
import { ApartmentDetailsComponent } from '../apartment-details/apartment-details.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth-guard/auth-guard.guard';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path:"home", 
  component: HomepageComponent,
  canActivate: [AuthGuard]
},
  {path: "locations", component: AllLocationsComponent, canActivate: [AuthGuard]},
  {path: "locations/:id", component: LocationComponent, canActivate: [AuthGuard]},
  {path: "accommodation/:id", component: ApartmentDetailsComponent, canActivate: [AuthGuard]},
  {path: "my-places", component: MyPlacesComponent, canActivate: [AuthGuard]},
  {path: "my-bookings", component: MyBookingsComponent, canActivate: [AuthGuard]},
  {path: "recommendations", component: RecommendationsComponent, canActivate: [AuthGuard]},
  {path: "add-new", component: MyAccommodationFormComponent, canActivate: [AuthGuard]},
  {path: "edit/:id", component: MyAccommodationFormComponent, canActivate: [AuthGuard]},
  {path: "reservation/:id", component: ReservationComponent, canActivate: [AuthGuard]},
  {path: "search-list", component: SearchResultsComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


