
import { ETRON, A1, A3, A4 } from './../../../car-card-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
etron = ETRON;
A1 = A1;
A3 = A3;
A4 = A4;



  constructor() { }

  ngOnInit(): void {
  }

}
