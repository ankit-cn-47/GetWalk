import { SellerService } from './../services/seller.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})
export class OfferFormComponent implements OnInit {

  constructor(private router: Router, private sellerService: SellerService) { }

  ngOnInit() {
  }

  saveOffer(form) {
    this.sellerService.newOffer(form);
    this.router.navigate(['/offers/store']);
  }

}
