import { Car } from './../../../interface';
import { CarModelService } from './../../../car-model.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
cars: Car[];



  constructor(private carModelService: CarModelService) { }

  ngOnInit(): void {
    this.getCars();
  }

  /// consumes the data from the service which gets initialized by the ngOnInit()
  getCars() {
    this.carModelService.getCarModels().subscribe(cars => this.cars = cars);
  }

}
