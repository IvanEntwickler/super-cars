import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Car } from './../../../interface';
import { CarModelService } from './../../../car-model.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';



@Component({
  selector: 'app-lines-and-packages',
  templateUrl: './lines-and-packages.component.html',
  styleUrls: ['./lines-and-packages.component.scss']
})
export class LinesAndPackagesComponent implements OnInit, OnDestroy  {
  @ViewChild('ticking', {static: true}) ticking: HTMLInputElement;
  inputForm: FormGroup;
  car: Car;
  subscription: Subscription;


  constructor(private carModelService: CarModelService, private formbuilder: FormBuilder) { }

  // getting the car State
  ngOnInit() {
    this.inputForm = this.formbuilder.group({
      basis: this.formbuilder.control(this.car),
      advanced: this.formbuilder.control(false),
      sLine: this.formbuilder.control(false),
      editionOne: this.formbuilder.control(false)
    });
    this.subscription = this.carModelService.getCarState().subscribe(car => this.car = car);
  }

  onAdvancedCheck(event) {
    const basis: FormControl = this.inputForm.get('basis') as FormControl;
    const advanced: FormControl = this.inputForm.get('advanced') as FormControl;
    if (event.target.checked) {
      advanced.setValue(this.car);
      this.car.buyPrice = this.car.buyPrice + 1500;
    } else {
        advanced.setValue(false);
        this.car.buyPrice = this.car.buyPrice - 1500;
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
