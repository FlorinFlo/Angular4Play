import { Car } from '../car/car';
import { Component, Input,HostBinding  } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { CarService } from '../car/car.service';
import { onlyDigit } from '../digit-only.directive';
//import { slideInDownAnimation } from '../../animations';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: `car-details`,
    templateUrl: `./cardetails.html`,
    styleUrls: ['./cardetails.css'],
   // animations: [ slideInDownAnimation ]
})

export class CarDetail {

//      @HostBinding('@routeAnimation') routeAnimation = true;
//   @HostBinding('style.display')   display = 'block';
//   @HostBinding('style.position')  position = 'absolute';


   car: Car;

    constructor(private route: ActivatedRoute,
        private router: Router,
         private carService: CarService) { }

    editable: boolean = false;

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.carService.getCar(params.get('id')))
            .subscribe((car: Car) => this.car = car);
    }

    toggleEdit() {

        this.editable = this.editable ? false : true;
    }

    gotoCars(){
         let carId = this.car ? this.car.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/cars', { id: carId, foo: 'foo' }]);
    }

}
