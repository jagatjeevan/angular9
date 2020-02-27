import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(http: HttpClient) {}

  getProducts() {
    console.log("get the product details");
  }
}
