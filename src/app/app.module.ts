import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTabsModule } from "@angular/material/tabs";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ApiComponentComponent } from "./api-component/api-component.component";
import { FormComponentComponent } from "./form-component/form-component.component";
//import { ApiResponseService } from './api-response.service';

@NgModule({
  declarations: [AppComponent, ApiComponentComponent, FormComponentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
