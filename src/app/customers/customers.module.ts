import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CustomersComponent } from "./customers.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { SharedModule } from "../shared/shared.module";
import { CustomerFilterComponent } from "./customer-filter/customer-filter.component";
import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomersDetailComponent } from "./customers-detail.component";

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    CustomerFilterComponent,
    CustomersDetailComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, CustomerRoutingModule],
  exports: [CustomersComponent],
})
export class CustomersModule {}
