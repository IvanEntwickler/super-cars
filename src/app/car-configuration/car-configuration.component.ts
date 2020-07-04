import { CarModelService } from './../car-model.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../interface';

@Component({
  selector: 'app-car-configuration',
  templateUrl: './car-configuration.component.html',
  styleUrls: ['./car-configuration.component.scss']
})
export class CarConfigurationComponent implements OnInit {
  car: Car;

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
    this.carModelService.getCarById(id).subscribe(car => this.car = car);
  }

}
