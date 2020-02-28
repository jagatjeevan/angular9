import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }
}
