import { Component, OnInit, ElementRef } from '@angular/core';
import { Car } from '../car/car';
import { GetCarsService } from '../carlist/getcars.service';
import { Logger } from '../../services/logger';
import { CarService } from '../car/car.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
    selector: 'cars-list',
    templateUrl: `./carslist.component.html`,
    styleUrls: ['./carslist.component.css'],
    providers: [GetCarsService,CarService]
 /*animation to highlight when selected */ 
//     animations: [
//     trigger('carState', [
//       state('inactive', style({
//         backgroundColor: '#eee',
//         transform: 'scale(1)'
//       })),
//       state('active',   style({
//         backgroundColor: '#cfd8dc',
//         transform: 'scale(1.1)'
//       })),
//       transition('inactive => active', animate('100ms ease-in')),
//       transition('active => inactive', animate('100ms ease-out'))
//     ])
//   ]

})
export class CarsList implements OnInit {

    // carsList: Car[] = [];
    listSize: string = '19%';
    // selectedCar: Car;
    cars: Observable<Car[]>;
    private selectedId:number;

    constructor(private service: CarService, private logger: Logger,private router:Router,private route: ActivatedRoute,private getcarsService:GetCarsService) {

    }


    ngOnInit() {

    //   this.initializeListOfCars();
      this.cars = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getAllCars();
      });

    }

    selectCar(car: Car) {    
        

        // if(car!=null){
        //     this.selectedCar = car;
        // } 

        this.router.navigate(['/car',car.id]);
    /**
     * set innactive the buttons  that are not selected
     */
        // for (var index = 0; index < this.carsList.length; index++) {
            
        //     if(this.carsList[index]!=this.selectedCar){
        //         this.carsList[index].toggleStateInnactive();
        //     }
            
        // }
    }

    isSelected(car: Car) { return car.id === this.selectedId; }

    // initializeListOfCars(){

    //     // if(this.carsList.length>0){
    //     //     this.carsList.length=0;
    //     // }           
    //     //   this.carsList = this.getcarsService.getCars();
    //     // let callback = setTimeout(() => {
    //     //     if (this.carsList.length <= 5) {
    //     //         this.listSize = (100 / this.carsList.length) - 1 + "%"
    //     //     } else {
    //     //         this.listSize = "19%"
    //     //     }

    //     // }, 0);

    //     this.listSize="19%";
    // }
    
    


}