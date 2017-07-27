import { Component, Input } from '@angular/core';
import { Car } from './../../car/car';
import { CarCreator } from './../../car/car.creator';

@Component({
    selector: `new-car`,
    templateUrl: `./newcar.component.html`
})

export class NewCar {
    @Input() car: Car;

    constructor(private carCreator:CarCreator){}

    model = Car;

    onSubmit() {
        console.log();
        this.carCreator.addNewCar(this.model.prototype);

    }

}