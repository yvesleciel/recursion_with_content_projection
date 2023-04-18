import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { ArrowRigthComponent } from './arrow-rigth/arrow-rigth.component';
import { FileTempComponent } from './file-temp/file-temp.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrowDownComponent,
    ArrowRigthComponent,
    FileTempComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
