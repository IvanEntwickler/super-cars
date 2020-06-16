import { CARS } from './../../../car-card-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  cars = CARS;

  constructor() { }

  ngOnInit(): void {
  }

}
