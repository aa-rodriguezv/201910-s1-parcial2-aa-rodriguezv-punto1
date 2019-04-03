import { Component, OnInit } from '@angular/core';
import {HeroeService} from '../heroe.service';
import {HeroeDetail} from '../heroe-detail';
import {Movie} from '../movie';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  constructor( private heroeService: HeroeService) { }

  ngOnInit() {
  }

}