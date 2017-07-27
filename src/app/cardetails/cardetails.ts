import { Car } from './../../../src/app/car/car';
import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: `car-details`,
    templateUrl: `./cardetails.html`,
    styleUrls:['./cardetails.css']
})

export class CarDetail {
    @Input() car: Car;



}
