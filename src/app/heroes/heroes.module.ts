import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroeService } from './heroe.service';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [HeroesListComponent, HeroeDetailComponent],
  providers: [HeroeService],
  exports: [HeroesListComponent]
})
export class HeroesModule { }