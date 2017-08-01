import { Component, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { Car } from '../../car/car';
import { CarService } from '../../car/car.service';
import { CarsList } from '../../carlist/carslist.component';
import { NgForm } from '@angular/forms';
import { GetCarsService } from "../../carlist/getcars.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: `new-car`,
    templateUrl: `./newcar.component.html`,
    providers: [CarsList, GetCarsService]
})

export class NewCar {
    //@Input() car: Car;

    carForm: NgForm;
    @ViewChild('carForm') currentForm: NgForm;


    constructor(private carCreator: CarService, private carlist: CarsList, private getcars: GetCarsService, private router: Router) { }




    model = new Car(100, "", " ", null);

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

        let cars: Car[] = this.getcars.getCars();


        setTimeout(() => {
            let idTemp = cars[cars.length - 1].id + 1;
            let car: Car = new Car(idTemp, this.model.model, this.model.color, this.model.price, "inactive");

            this.carCreator.addNewCar(car);
            this.router.navigate(['/cars']);

        }, 0);






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