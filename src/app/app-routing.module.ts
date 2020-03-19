import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FileNotfound } from "./file-not-found.component";

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
  { path: "", pathMatch: "full", component: FileNotfound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
