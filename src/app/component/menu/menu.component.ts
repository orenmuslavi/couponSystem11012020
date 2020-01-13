import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  links: any[] = [
    {
      "name"  : "Company",
      "id"    : "1",
      "route" : "companyList"
    },
    {
      "name"  : "Customer",
      "id"    : "2",
      "route" : "customerList"
    },
    {
      "name"  : "Coupons",
      "id"    : "3",
      "route" : "couponList"
    }
  ];
}
