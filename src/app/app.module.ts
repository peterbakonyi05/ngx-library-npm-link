import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTestModule } from "ngx-test";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
