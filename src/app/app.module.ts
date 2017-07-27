import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarsList } from './../app/carlist/carslist.component'
import { CarCreator } from './car/car.creator';
import { Logger } from './services/logger';
import { CarDetail } from './cardetails/cardetails';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewCar } from './carcrud/newcar/newcar.component';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsList,
    CarDetail,
    NewCar

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [CarCreator, Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
