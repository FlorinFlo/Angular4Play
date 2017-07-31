import { Car } from '../car/car';
import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

// import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: `car-details`,
    templateUrl: `./cardetails.html`,
    styleUrls:['./cardetails.css']
})

export class CarDetail {
    @Input() car: Car;

    constructor( ){}

    editable:boolean=false;

    toggleEdit(){
        
        this.editable=this.editable?false:true;
    }

}
