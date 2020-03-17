import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";

import { CustomersModule } from "./customers/customers.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { FileNotfound } from "./file-not-found.component";

@NgModule({
  declarations: [AppComponent, FileNotfound],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    CustomersModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
