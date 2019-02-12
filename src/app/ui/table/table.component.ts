import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';
import { FactsService } from '../../service/facts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() cards : Card[];
  constructor(private _factService:FactsService, private _router: Router) { }

  ngOnInit() {
    this.cards = this._factService.getFactCache();
  }

  switchView()
  {
    this._router.navigateByUrl('card-view');
  }
}
