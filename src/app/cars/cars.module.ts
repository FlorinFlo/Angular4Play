import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarsList } from '../cars/carlist/carslist.component';
import { CarDetail } from '../cars/cardetails/cardetails';
import { NewCar } from '../cars/carcrud/newcar/newcar.component';
import { CarCreator } from '../cars/car/car.creator';
import { Logger } from '../services/logger';
import { CarsRoutingModule} from './cars-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CarsRoutingModule
    ],
    declarations: [
        CarsList,
        CarDetail,
        NewCar
    ],
    providers: [CarCreator, Logger]
})
export class CarsModule { }