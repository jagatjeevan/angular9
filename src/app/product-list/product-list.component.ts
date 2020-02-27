import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  clickCounter: number = 0;
  countTimes: string = "time";
  name: string = "Jagat Jeevan";

  constructor(_http: HttpService) {
    _http.getProducts();
  }

  getCountTime() {
    this.countTimes = this.clickCounter > 1 ? "times" : "time";
  }

  incrementClick() {
    this.clickCounter += 1;
    this.getCountTime();
  }

  decrementClick() {
    this.clickCounter -= 1;
    this.getCountTime();
  }

  getClass() {
    let myClass = {
      active: this.clickCounter > 1,
      "non-active": this.clickCounter <= 1
    };
    return myClass;
  }

  ngOnInit(): void {}
}
