import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarsList } from '../cars/carlist/carslist.component';
import { CarDetail } from '../cars/cardetails/cardetails';
import { NewCar } from '../cars/carcrud/newcar/newcar.component';
import { CarService } from '../cars/car/car.service';
import { Logger } from '../services/logger';
import { CarsRoutingModule } from './cars-routing.module';
import { ForbiddenValidatorDirective } from './digit-only.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CarsRoutingModule
    ],
    declarations: [
        CarsList,
        CarDetail,
        NewCar,
        ForbiddenValidatorDirective

    ],
    providers: [CarService, Logger]
})
export class CarsModule { }