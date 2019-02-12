import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { FactsService } from '../../service/facts.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private _factService:FactsService) { }

  ngOnInit() {
  }

  

}
