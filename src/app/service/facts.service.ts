import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Card } from '../models/card';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class FactsService {

  rootUrl = 'http://127.0.0.1:3000/';
  cardCache: Card[] = [];

  constructor(private _http:Http) 
  {

  }

  public getFact(number: string) : Observable<any>
  {
    var params = new HttpParams();

    var correctNumber = number.split('/');
    console.log(this.rootUrl + '?day=' + correctNumber[1] + '&month=' + correctNumber[0]);
    return this._http.get(this.rootUrl + '?day=' + correctNumber[1] + '&month=' + correctNumber[0]).map(response => {console.log(response.json()); return response.json();});
  }

  public getFactCache() : Card[]
  {
    return this.cardCache;
  } 

  public setCardCache(cards: Card[]) : void
  {
    this.cardCache = cards;
  }
}
