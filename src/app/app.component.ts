import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  greetings: string;

  constructor() {}

  ngOnInit() {
    this.greetings = "Hello World!";
  }
}
