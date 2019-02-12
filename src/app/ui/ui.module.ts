import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './card/card.component';
import { FactsService } from '../service/facts.service';
import { HttpModule } from '@angular/http';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { Routes, RouterModule } from "@angular/router";
import { Card } from '../models/card';
import { CardListComponent } from './card-list/card-list.component';

const appRoutes: Routes = [
  {
    path: 'table-view',
    component: TableComponent
  },
  {
    path: 'card-view',
    component: CardListComponent
  },
  {
    path: '**',
    redirectTo: 'card-view'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [LayoutComponent, CardComponent, InputComponent, TableComponent, CardListComponent],
  exports: [LayoutComponent],
  providers: [FactsService]
})
export class UiModule { }
