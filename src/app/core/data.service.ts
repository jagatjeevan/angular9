import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { ICustomerAlbum } from "../shared/interfaces";

@Injectable()
export class DataService {
  baseUrl: string = "assets/";

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ICustomerAlbum[]> {
    return this.http
      .get<ICustomerAlbum[]>(`${this.baseUrl}customer-album.json`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.log("Error from server: ", error);
    return Observable.throw(error || "Node.js server error");
  }
}
