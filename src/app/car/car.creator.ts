import { Car } from './car';
import { Type,Injectable } from '@angular/core';
import { Logger } from './../../../src/app/services/logger';


const cars = [
   
    new Car("Dacia", "Blue", 2500),
    new Car("Dayhatzu", "Red", 4500),
    new Car("WV", "Orange", 3000),
    new Car("Nissan", "Pink", 5000),
    new Car("Insignia", "White", 5000),
    new Car("Logan", "Blue", 2500),
    new Car("Subaru", "Red", 4500),
    new Car("Lada", "Orange", 3000),
    new Car("Tatra", "Pink", 5000)
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

    addNewCar(car :Car){
        cars.push(car);
    }



    
}

