import { Component, OnInit } from '@angular/core';
import {Heroe} from '../heroe';
import {HeroeService} from '../heroe.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  constructor(private heroeService: HeroeService) { }

  /**
   * 
   */
  heroes: Heroe[];

  ngOnInit() {
  }

  getHeroes(): void{
    this.heroeService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}