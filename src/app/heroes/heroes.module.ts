import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroeService } from './heroe.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroesListComponent],
  providers: [HeroeService]
})
export class HeroeModule { }