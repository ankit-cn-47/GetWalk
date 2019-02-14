import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { OffersComponent } from './offers/offers.component';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { StoreOffersComponent } from './store-offers/store-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OffersComponent,
    HeaderComponent,
    OfferFormComponent,
    StoreOffersComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
