import { SellerService } from './../services/seller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-offers',
  templateUrl: './store-offers.component.html',
  styleUrls: ['./store-offers.component.css']
})
export class StoreOffersComponent implements OnInit {

  offers$;

  constructor(private sellerService: SellerService) { }

  ngOnInit() {
    this.offers$ = this.sellerService.allOffers();
  }

}
