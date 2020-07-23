import { Subscription } from 'rxjs';
import { Car } from './../../../interface';
import { CarModelService } from './../../../car-model.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit, OnDestroy {
  car: Car;
  subscription: Subscription;

  constructor(private carModelService: CarModelService) { }

  ngOnInit(): void {
    /// getting the car State
    this.subscription = this.carModelService.getCarState().subscribe(car => this.car = car);
  }

  /// prevents memory leak --- removes subscription
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
