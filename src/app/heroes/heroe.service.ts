import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Heroe } from './heroe';
import { HeroeDetail } from './heroe';
import { Movie } from './movie';

const API_URL = './../assets/';
const HEROES_LIST = 'heroes.json';
const HEROE_DETAIL = 'heroe'

@Injectable()
export class HeroeService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
      return this.http.get<Heroe[]>(API_URL + HEROES_LIST);
  }

  get

}