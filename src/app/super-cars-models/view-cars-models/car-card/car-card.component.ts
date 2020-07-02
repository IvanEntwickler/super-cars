import { Car } from './../../../interface';
import { CarModelService } from './../../../car-model.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, mergeMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';

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

  /// consumes the data from the service which gets initialized by the ngOnInit()
  getfilteredCars() {
    /// renders the fitting template with *ngIf
    this.carModelService.getTheCars = !this.carModelService.getTheCars;
    /// gives filteredCars$ the value of the piped formdata(switchMap maps a new Observable)
    /// from the getfilteredCars method in the CarModelService
    this.filteredCars$ = this.carModelService.filterSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((formdata: any) => this.carModelService.getfilteredCars(formdata) ),
    );
  }

  ngOnDestroy(): void {
  }

}
