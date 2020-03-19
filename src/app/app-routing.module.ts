import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FileNotfound } from "./file-not-found.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () =>
      import("./customers/customers.module").then(m => m.CustomersModule),
  },
  { path: "random", pathMatch: "full", component: FileNotfound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
