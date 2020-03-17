import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersComponent } from "./customers.component";
import { CustomersDetailComponent } from "./customers-detail.component";

const routes: Routes = [
  { path: "customers", component: CustomersComponent },
  { path: "customers/:id", component: CustomersDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
