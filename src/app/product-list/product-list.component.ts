import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Photos } from "../interface/photos";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  clickCounter: number = 0;
  countTimes: string = "time";
  name: string = "Jagat Jeevan";
  photos: Array<Photos> = [];

  constructor(private _http: HttpService) {}

  getCountTime() {
    this.countTimes = this.clickCounter > 1 ? "times" : "time";
  }

  changeClickCount(isIncrement: boolean) {
    this.clickCounter = isIncrement
      ? this.clickCounter + 1
      : this.clickCounter - 1;
    this.getCountTime();
  }

  getClass() {
    let myClass = {
      active: this.clickCounter > 1,
      "non-active": this.clickCounter <= 1
    };
    return myClass;
  }

  ngOnInit(): void {
    this._http.getPhotos().subscribe((data: Array<Photos>) => {
      console.log(data);
      this.photos = data.slice(0, 20);
      console.log(this.photos);
    });
  }
}
