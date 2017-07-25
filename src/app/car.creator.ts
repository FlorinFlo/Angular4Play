import { Car } from './car';
import { Type,Injectable } from '@angular/core';
import { Logger } from './logger';


const cars = [
    new Car("Opel", "White", 5000),
    new Car("Dacia", "Blue", 2500),
    new Car("Dayhatzu", "Red", 4500),
    new Car("WV", "Orange", 3000),
    new Car("Nissan", "Pink", 5000)
]

@Injectable()
export class CarCreator {

    constructor(private logger:Logger){}

    getAllCars(type: Type<any>): PromiseLike<any[]> {
        if (type === Car) {
            return Promise.resolve<Car[]>(cars);
        }
        let error=new Error("Cars can't be retrieved");
        this.logger.error(error);
        throw error;
    }
}

