import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { FactsService } from '../../service/facts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit{

  cards: Card[] = [];
  counter: number = 0;

  constructor(private _factService: FactsService, private _router: Router) { }

  ngOnInit() {
    this.cards = this._factService.getFactCache();
    this.counter = this.cards.length;
  }


  onValueChanged(event)
  {
    var dates: string[] = event;
    this.cards.splice(0, this.cards.length);

    dates.forEach(date => {
      this.getNumberFact(date);
    });

    this._factService.setCardCache(this.cards);
    this.counter = this.cards.length;
  }

  private getNumberFact(date: string)
  {
    var newCard: Card = new Card();

    newCard.header = date;
    this._factService.getFact(date).subscribe(
      res => {
        newCard.body = res.text;
      });

    this.cards.push(newCard);
  }

  switchView()
  {
    this._router.navigateByUrl('table-view');
  }
}
