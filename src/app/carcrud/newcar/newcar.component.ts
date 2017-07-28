import { Component, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { Car } from './../../car/car';
import { CarCreator } from './../../car/car.creator';
import { CarsList } from './../../carlist/carslist.component'
import { NgForm } from '@angular/forms';

@Component({
    selector: `new-car`,
    templateUrl: `./newcar.component.html`
})

export class NewCar {
    //@Input() car: Car;

    carForm: NgForm;
    @ViewChild('carForm') currentForm: NgForm;


    constructor(private carCreator: CarCreator, private carlist: CarsList) { }

    model = new Car(" ", " ", null);

    ngAfterViewChecked() {
        console.log("in ng after view checked");
        this.formChanged();

    }


    formChanged() {

        console.log("form changed");
        if (this.currentForm === this.carForm) { console.log("form changed return "); return; }
        this.carForm = this.currentForm;

        console.log("this carform " + this.carForm)

        if (this.carForm) {
            this.carForm.valueChanges.subscribe(data => this.onValueChanged(data));
        }


    }

    onValueChanged(data?: any) {

        if (!this.carForm) { return; }
        const form = this.carForm.form;
        for (const field in this.formErrors) {
            // clear previous error message (if any)

            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];

                for (const key in control.errors) {

                    this.formErrors[field] += messages[key] + ' ';

                }
            }
        }



    }

    onSubmit() {

        let car: Car = new Car(this.model.model, this.model.color, this.model.price, "inactive");

        this.carCreator.addNewCar(car);
        this.carlist.initializeListOfCars();

    }

    formErrors = {

        'price': ''
    }

    validationMessages = {

        'price': {
            'required': 'Power is required.'
        }
    };

}