
import { Car } from './../../interface';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-model-slider',
  templateUrl: './model-slider.component.html',
  styleUrls: ['./model-slider.component.scss']
})
export class ModelSliderComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
