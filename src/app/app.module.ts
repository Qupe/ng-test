import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {JsonpModule} from '@angular/http';
import {PhotosService} from './photos.service';
import { ConvertDatePipe } from './convert-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ConvertDatePipe
  ],
  imports: [
    BrowserModule,
    JsonpModule
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
