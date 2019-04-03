import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Heroe } from './heroe';

const API_URL = './../assets';
const HEROES_LIST = 'heroes.json'; 

@Injectable()
export class HeroeService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
      return this.http.get<Heroe[]>(API_URL + HEROES_LIST);
  }

}