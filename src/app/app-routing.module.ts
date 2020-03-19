import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Dashboard } from "./dashboard.component";

const routes: Routes = [
  {
    path: "customers",
    loadChildren: () =>
      import("./customers/customers.module").then(m => m.CustomersModule),
  },
  {
    path: "orders",
    loadChildren: () =>
      import("./orders/orders.module").then(m => m.OrdersModule),
  },
  { path: "", pathMatch: "full", component: Dashboard },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
