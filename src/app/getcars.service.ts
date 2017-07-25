import { Logger } from './logger';
import { CarCreator } from './car.creator';
import { Car } from './car'
import { Injectable } from '@angular/core';


@Injectable()
export class GetCarsService {

    carsList: Car[] = [];
    constructor(private carCreator: CarCreator) { }

    getCars() {
        this.carCreator.getAllCars(Car).then((cars: Car[]) => {
            this.carsList.push(...cars);

        });
        return this.carsList;

    }

}