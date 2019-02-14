import { SellerService } from './../services/seller.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  phone;
  offers$;

  constructor(private router: ActivatedRoute, private sellerService: SellerService) { }

  ngOnInit() {
    this.offers$ = this.sellerService.allOffers();
    this.router.params.subscribe(p => this.phone = p);
    console.log(this.phone);
  }

  sendOffer(offerId) {
    this.sellerService.sendOffer(offerId, this.phone);
  }

}
