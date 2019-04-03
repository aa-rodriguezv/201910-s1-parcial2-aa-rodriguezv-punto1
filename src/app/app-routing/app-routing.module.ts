import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {HeroeDetailComponent} from '../heroes/heroe-detail/heroe-detail.component';


const routes: Routes = [

    {
      path: ':id',
      component: HeroeDetailComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }