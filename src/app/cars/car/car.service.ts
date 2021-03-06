import { Car } from './car';
import { Type,Injectable } from '@angular/core';
import { Logger } from '../../services/logger';


const cars = [
   
    new Car(1,"Dacia", "Blue", 2500),
    new Car(2,"Dayhatzu", "Red", 4500),
    new Car(3,"WV", "Orange", 3000),
    new Car(4,"Nissan", "Pink", 5000),
    new Car(5,"Insignia", "White", 5000),
    new Car(6,"Logan", "Blue", 2500),
    new Car(7,"Subaru", "Red", 4500),
    new Car(8,"Lada", "Orange", 3000),
    new Car(9,"Tatra", "Pink", 5000)
]

let carPromise = Promise.resolve(cars);

@Injectable()
export class CarService {

    

    constructor(private logger:Logger){}

    // getAllCars(type: Type<any>): PromiseLike<any[]> {
    //     if (type === Car) {
    //         return Promise.resolve<Car[]>(cars);
    //     }
    //     let error=new Error("Cars can't be retrieved");
    //     this.logger.error(error);
            
    //     throw error;
    // }
    getAllCars(){
        return carPromise;
    }

    addNewCar(car :Car){
        console.log(car.price+"=>Model");
        cars.push(car);
    }

    getCar(id: number | string) {
        console.log("Get car with no"+id);
    return carPromise
      // (+) before `id` turns the string into a number
      .then(cars => cars.find(car => car.id === +id));
  }

    
}

