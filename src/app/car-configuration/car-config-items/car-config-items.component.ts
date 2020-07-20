import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CarModelService } from './../../car-model.service';
import { ConfigFormService } from './../../config-form.service';
import { Car } from './../../interface';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-car-config-items',
  templateUrl: './car-config-items.component.html',
  styleUrls: ['./car-config-items.component.scss']
})
export class CarConfigItemsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  formsub: Subscription;
  configForm: FormGroup;
  car: Car;


  constructor(public configFormService: ConfigFormService, private carModelService: CarModelService ) { }

  ngOnInit(): void {
    this.formsub = this.configFormService.configForm$.subscribe(form => this.configForm = form);
    /// getting the car State
    this.subscription = this.carModelService.getCarState().subscribe(car => this.car = car);
  }

  onSubmit() {
    console.log(this.configFormService.configForm.value);
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

}
