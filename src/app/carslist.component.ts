import { Component, OnInit, OnDestroy } from '@angular/core';
import { Car } from './car';
import { GetCarsService } from './getcars.service';
import { Logger } from './logger';
import { CarCreator } from './car.creator';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
    selector: 'cars-list',
    templateUrl: `./carslist.component.html`,
    styleUrls: ['./carslist.component.css'],
    providers: [GetCarsService],
    animations: [
    trigger('carState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class CarsList implements OnInit {

    carsList: Car[] = [];
    listSize: string = '';
    selectedCar: Car;

    constructor(private service: GetCarsService, private logger: Logger) {

    }


    ngOnInit() {

        this.carsList = this.service.getCars();
        let callback = setTimeout(() => {
            if (this.carsList.length <= 5) {
                this.listSize = (100 / this.carsList.length) - 1 + "%"
            } else {
                this.listSize = "19%"
            }

        }, 0);


    }

    selectCar(car: Car) {
        
        this.selectedCar = car;
    
        for (var index = 0; index < this.carsList.length; index++) {
            
            if(this.carsList[index]!=this.selectedCar){
                this.carsList[index].toggleStateInnactive();
            }
            
        }
    }


}