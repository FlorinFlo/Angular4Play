import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// import { ComposeMessageComponent }  from './compose-message.component';
import { PageNotFoundComponent } from './not-found.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
// import { AuthGuard }                from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-streategy';

const appRoutes: Routes = [
  //   {
  //     path: 'crisis-center',
  //     loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
  //     data: { preload: true }
  //   },
  //{ path: '', component: AppComponent }, this gives a copy
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
