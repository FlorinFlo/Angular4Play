import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewCar } from './carcrud/newcar/newcar.component';
import { CarDetail } from './cardetails/cardetails';
import { CarsList } from './carlist/carslist.component';


const carsRoutes: Routes = [
  { path: 'newcar', component:NewCar},
  { path: 'cars', component: CarsList },
  { path: 'car/:id', component: CarDetail }
];

@NgModule({
  imports: [
    RouterModule.forChild(carsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule { }
