import { Subscription } from 'rxjs';
import { Car } from './../../../interface';
import { CarModelService } from './../../../car-model.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lines-and-packages',
  templateUrl: './lines-and-packages.component.html',
  styleUrls: ['./lines-and-packages.component.scss']
})
export class LinesAndPackagesComponent implements OnInit  {
  car: Car;
  subscription: Subscription;


  constructor(private carModelService: CarModelService) { }

  ngOnInit() {
    this.subscription = this.carModelService.getCarState().subscribe(car => this.car = car);
  }

}
