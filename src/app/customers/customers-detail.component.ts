import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { ICustomerAlbum } from "../shared/interfaces";
import { DataService } from "../core/data.service";

@Component({
  selector: "app-customers-details",
  template: `
    <div>some value {{ customerId }}</div>
  `,
})
export class CustomersDetailComponent implements OnInit {
  customerId: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get("id");
  }
}
