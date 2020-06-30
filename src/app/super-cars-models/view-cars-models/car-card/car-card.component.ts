import { Car } from './../../../interface';
import { CarModelService } from './../../../car-model.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { map, filter, switchMap, groupBy } from 'rxjs/operators';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit, OnDestroy {
cars: Car[];
filteredCars$: Observable<Car[]>;



  constructor(public carModelService: CarModelService) { }

  ngOnInit(): void {
    this.getfilteredCars();
  }

  /// consumes the data from the service which gets initialized by the ngOnInit()
  getCars() {
    this.carModelService.getCarModels().subscribe(cars => this.cars = cars);
  }

  getfilteredCars() {
    this.carModelService.getTheCars = !this.carModelService.getTheCars;
    this.filteredCars$ = this.carModelService.filterSubject.pipe(
      switchMap((formdata: any) => this.carModelService.getfilteredCars(formdata) ),
    );
  }

  ngOnDestroy(): void {
  }

}
