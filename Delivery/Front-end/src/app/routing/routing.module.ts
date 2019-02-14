import { StoreOffersComponent } from './../store-offers/store-offers.component';
import { UserComponent } from './../user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from '../offers/offers.component';
import { OfferFormComponent } from '../offer-form/offer-form.component';

const appRoutes: Routes = [
  {path: '', component: UserComponent },
  {path: 'user', redirectTo: ''},
  {path: 'offers/store', component: StoreOffersComponent},
  {path: 'offers/:phone', component: OffersComponent},
  {path: 'offer-form', component: OfferFormComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
