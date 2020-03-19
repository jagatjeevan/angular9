import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomersComponent } from "./customers.component";
import { CustomersDetailComponent } from "./customers-detail.component";

const routes: Routes = [
  { path: "", component: CustomersComponent },
  { path: ":id", component: CustomersDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
