import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-streategy';
import { CarsList } from '../app/cars/carlist/carslist.component'
import { NewCar } from '../app/cars/carcrud/newcar/newcar.component';

const appRoutes: Routes = [

  //{ path: '', component: AppComponent }, this gives a copy
  {path:'newcar',component:NewCar},
  { path: 'cars', component: CarsList },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    //CanDeactivateGuard,
    // SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
