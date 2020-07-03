import { Component, OnInit } from '@angular/core';
import { Car } from './../../../interface';
import { CarModelService } from './../../../car-model.service';
import { Observable } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-filtered-car-card',
  templateUrl: './filtered-car-card.component.html',
  styleUrls: ['./filtered-car-card.component.scss']
})
export class FilteredCarCardComponent implements OnInit {
  filteredCars$: Observable<Car[]>;

  constructor(private carModelService: CarModelService) { }

  ngOnInit(): void {
    this.getfilteredCars();
  }

  /// consumes the data from the service which gets initialized by the ngOnInit()
  getfilteredCars() {
    /// gives filteredCars$ the value of the piped formdata(switchMap maps a new Observable)
    /// from the getfilteredCars method in the CarModelService
    this.filteredCars$ = this.carModelService.filterSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((formdata: any) => this.carModelService.getfilteredCars(formdata) ),
    );
  }

}
