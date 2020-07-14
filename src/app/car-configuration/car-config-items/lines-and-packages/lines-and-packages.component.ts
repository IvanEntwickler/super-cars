import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Car } from './../../../interface';
import { CarModelService } from './../../../car-model.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';



@Component({
  selector: 'app-lines-and-packages',
  templateUrl: './lines-and-packages.component.html',
  styleUrls: ['./lines-and-packages.component.scss']
})
export class LinesAndPackagesComponent implements OnInit, OnDestroy  {
  inputForm: FormGroup;
  car: Car;
  subscription: Subscription;

  constructor(private carModelService: CarModelService, private formbuilder: FormBuilder) { }

  // getting the car State
  ngOnInit() {
    this.inputForm = this.formbuilder.group({
      basis: this.formbuilder.control(true),
      advanced: this.formbuilder.control(null),
      sLine: this.formbuilder.control(null),
      editionOne: this.formbuilder.control(null)
    });
    this.subscription = this.carModelService.getCarState().subscribe(car => this.car = car);
  }

  onAdvancedCheck(event: any) {
    const advanced: FormControl = this.inputForm.get('advanced') as FormControl;
    const addAdvancedPrice = this.car.buyPrice + 1500;
    const removeAdvancedPrice = this.car.buyPrice - 1500;
    if (event.target.checked) {
      this.car.buyPrice = addAdvancedPrice;
    }
    if (!event.target.checked) {
      this.car.buyPrice = removeAdvancedPrice;
    }
  }
  onBasisCheck(event: any) {
    const basis: FormControl = this.inputForm.get('basis') as FormControl;
    if (event.target.checked) {
      return this.car;
    }
}



onSubmit() {
  console.log(this.inputForm.value);
}


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
