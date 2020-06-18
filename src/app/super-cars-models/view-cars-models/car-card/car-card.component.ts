
import { ETRON, A1, A3, A4, A5, A6, A7, A8, Q2, Q3, Q5, Q7, Q8, TT, R8 } from './../../../car-card-model';
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
A5 = A5;
A6 = A6;
A7 = A7;
A8 = A8;
Q2 = Q2;
Q3 = Q3;
Q5 = Q5;
Q7 = Q7;
Q8 = Q8;
TT = TT;
R8 = R8;



  constructor() { }

  ngOnInit(): void {
  }

}
