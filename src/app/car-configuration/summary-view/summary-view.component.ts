import { Subscription } from 'rxjs';
import { CarModelService } from './../../car-model.service';
import { Car } from './../../interface';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.scss']
})
export class SummaryViewComponent implements OnInit, OnDestroy {
  extras = 0; // for the moment later dynamic
  car: Car;
  subscription: Subscription;

  constructor(private carModelService: CarModelService) { }

  ngOnInit(): void {
    this.subscription = this.carModelService.getCarState()
    .subscribe(car => this.car = car);
  }
  /// 3.0% von Basis auf advanced im Durchschnitt
  /// 8.0% von Basis auf s line im Durchschnitt
  /// 15% von Basis auf edition one im Durchschnitt

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
