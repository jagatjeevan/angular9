import { Component, OnInit, Input } from "@angular/core";

import { ICustomerAlbum } from "../../shared/interfaces";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
  private _customers: ICustomerAlbum[] = [];
  customerList: ICustomerAlbum[];
  sortDirection: string = "asc";
  currencyCode: string = "USD";

  @Input() get customers() {
    return this._customers;
  }

  set customers(value) {
    this._customers = this.customerList = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
