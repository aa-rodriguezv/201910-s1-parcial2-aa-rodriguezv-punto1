import { Component, OnInit } from '@angular/core';
import {HeroeService} from '../heroe.service';
import {HeroeDetail} from '../heroe-detail';
import {Movie} from '../movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

  constructor( private heroeService: HeroeService,
  private route: ActivatedRoute) { }

  heroeDetail: HeroeDetail;

  heroe_id: number;

  movies: Movie[];

  ngOnInit() {
    this.heroe_id = +this.route.snapshot.paramMap.get('id');
        if (this.heroe_id){
        this.heroeDetail = new HeroeDetail();
        this.getHeroeDetail();
        }
  }


  getHeroeDetail(): void{
    this.heroeDetail.getHeroeDetail(this.heroe_id).subscribe(detail => this.heroeDetail = detail);
  }

}