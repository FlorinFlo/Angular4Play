import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { GetCarsService } from './getcars.service';

@Component({
    selector: 'cars-list',
    templateUrl: `./carslist.component.html`,
    providers:[GetCarsService]
})
export class CarsList implements OnInit {

    carsList: Car[];

    constructor(private service: GetCarsService) { }

    ngOnInit() {
        this.carsList = this.service.getCars();
    }

}