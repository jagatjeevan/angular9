import { Component, OnInit } from "@angular/core";

import { ICustomerAlbum } from "../shared/interfaces";
import { DataService } from "../core/data.service";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent implements OnInit {
  constructor(private dataService: DataService) {}

  headerTitle: string = "Welcome to Customer page";
  people: ICustomerAlbum[] = [];
  filteredPeople: ICustomerAlbum[] = [];
  filterText: string = "";

  filterChanged(value) {
    if (value === "") {
      this.people = this.filteredPeople;
    } else {
      this.people = this.filteredPeople.filter(
        (item: ICustomerAlbum) =>
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.body.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  ngOnInit(): void {
    this.dataService.getCustomers().subscribe((customers: ICustomerAlbum[]) => {
      this.people = this.filteredPeople = customers;
    });
  }
}
