import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-customer-filter",
  templateUrl: "./customer-filter.component.html",
  styleUrls: ["./customer-filter.component.scss"],
})
export class CustomerFilterComponent implements OnInit {
  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(value) {
    this._filter = value;
    this.changed.emit(this.filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
