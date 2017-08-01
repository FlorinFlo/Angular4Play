import { Logger } from '../../services/logger';
import { CarService } from '../car/car.service';
import { Car } from '../../cars/car/car';
import { Injectable } from '@angular/core';


@Injectable()
export class GetCarsService {

    
    carsList: Car[] = [];
    constructor(private carCreator: CarService,private logger:Logger) { }

    getCars() {
        this.carCreator.getAllCars().then((cars: Car[]) => {
            this.carsList.push(...cars);
            
            this.logger.log("Push");
        });
        
        return this.carsList;

    }

   

   
}