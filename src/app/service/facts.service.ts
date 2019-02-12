import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Card } from '../models/card';
import 'rxjs/add/operator/map';

@Injectable()
export class FactsService {

  rootUrl = 'http://numbersapi.com/';
  cardCache: Card[] = [];

  constructor(private _http:Http) 
  {

  }

  public getFact(number: string) : Observable<any>
  {
    var correctNumber = number.split('/');
    return this._http.get(this.rootUrl + correctNumber[1] + '/' + correctNumber[0] + '?json').map(response => response.json());

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
