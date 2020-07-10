import { Car } from './../../interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-config-items',
  templateUrl: './car-config-items.component.html',
  styleUrls: ['./car-config-items.component.scss']
})
export class CarConfigItemsComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
