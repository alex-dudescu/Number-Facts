import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  value: string;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(event)
  {
    var dates: string[] = this.value.split(",");
    
    for(var i =0 ; i < dates.length; i++)
    {
      dates[i] = dates[i].replace(' ', '');
    }

    this.valueChanged.emit(dates);
  }
}
