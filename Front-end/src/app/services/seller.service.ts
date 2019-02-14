import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  baseUrl = 'http://localhost:3000/offers';

  constructor(private http: HttpClient) { }

  allOffers() {
    return this.http.get(this.baseUrl);
  }

  newOffer(form) {
    this.http.post(this.baseUrl + '/new-offer', form)
      .subscribe(() => console.log('posted'));
  }

  sendOffer(offerId, phone) {
    alert('Offer Sent');
    this.http.post(this.baseUrl + '/send-offer', {to: phone, offer: offerId}).subscribe((res) => {
      console.log(res);
    });
  }
}
