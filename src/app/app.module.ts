import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { ArrowRigthComponent } from './arrow-rigth/arrow-rigth.component';
import { FileTempComponent } from './file-temp/file-temp.component';
import {HttpClientModule} from "@angular/common/http";
import { LiftComponent } from './lift/lift.component';
import { ContainRefDirective } from './contain-ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    ArrowDownComponent,
    ArrowRigthComponent,
    FileTempComponent,
    LiftComponent,
    ContainRefDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
