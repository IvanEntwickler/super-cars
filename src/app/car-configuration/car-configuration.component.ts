import { Subscription } from 'rxjs';

import { CarModelService } from './../car-model.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../interface';

@Component({
  selector: 'app-car-configuration',
  templateUrl: './car-configuration.component.html',
  styleUrls: ['./car-configuration.component.scss']
})
export class CarConfigurationComponent implements OnInit, OnDestroy {
  car: Car;
  subscription: Subscription;

  constructor(
    private carModelService: CarModelService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getCarById();
  }

  /// subscribes to car with the fitting id
  getCarById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.carModelService.getCarById(id).subscribe(car => {
      return this.car = car;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
