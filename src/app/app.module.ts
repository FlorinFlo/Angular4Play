import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarsList } from './carslist.component'
import { CarCreator } from './car.creator';
import { Logger} from './logger';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsList

  ],
  imports: [
    BrowserModule
  ],
  providers: [CarCreator,Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
