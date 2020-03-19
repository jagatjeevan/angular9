import { Component } from "@angular/core";

@Component({
  selector: "dashboard",
  template: `
    <h1>Here goes the dashboard</h1>
    <div class="dashboard-list">
      <div class="image-container">
        <img src="assets/shoppingcart.svg" class="shopping-cart" />
        <label><a routerLink="/orders">Orders</a></label>
      </div>
      <div class="image-container">
        <img src="assets/customer-list.png" class="customer-list" />
        <label><a routerLink="/customers">Customer list</a></label>
      </div>
    </div>
  `,
})
export class Dashboard {
  constructor() {}
}
