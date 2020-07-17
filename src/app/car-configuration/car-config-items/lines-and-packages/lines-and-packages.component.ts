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
  isDisabled = false;

  constructor(private carModelService: CarModelService, private formbuilder: FormBuilder) { }

  // getting the car State
  ngOnInit() {
    this.inputForm = this.formbuilder.group({
      basis: this.formbuilder.control(true),
      advanced: this.formbuilder.control(null),
      sLine: this.formbuilder.control(null),
      editionOne: this.formbuilder.control(null),
      interieurSline: this.formbuilder.control(null),
      interieurDesign: this.formbuilder.control(null),
      packageOne: this.formbuilder.control(null),
      packageTwo: this.formbuilder.control(null),
    });
    this.subscription = this.carModelService.getCarState().subscribe(car => this.car = car);
  }

  onEditionOneCheck(event: any) {
    /// variables to control the form controls
    const basis: FormControl = this.inputForm.get('basis') as FormControl;
    const sLine: FormControl = this.inputForm.get('sLine') as FormControl;
    const advanced: FormControl = this.inputForm.get('advanced') as FormControl;

    /// operation on car.buyPrice
    const addPrice = this.car.buyPrice + 2500;
    const removePrice = this.car.buyPrice - 2500;

    /// operation on car.leasingPrice
    const addLeasing = this.car.leasingPrice + 250;
    const removeLeasing = this.car.leasingPrice - 250;

    /// if input checked add number to buyPrice and leasingPrice
    /// reset and disable other controls
    if (event.target.checked) {
      this.car.leasingPrice = addLeasing;
      this.car.buyPrice = addPrice;
      basis.reset({value: null, disabled: true});
      sLine.reset({value: null, disabled: true});
      advanced.reset({value: null, disabled: true});
    }
    /// if input not checked remove number from buyPrice and leasingPrice
    /// and enable controls
    if (!event.target.checked) {
      basis.enable();
      sLine.enable();
      advanced.enable();
      basis.setValue(true);
      this.car.buyPrice = removePrice;
      this.car.leasingPrice = removeLeasing;
    }
  }

  onSlineCheck(event: any) {
    /// variables to control the form controls
    const basis: FormControl = this.inputForm.get('basis') as FormControl;
    const advanced: FormControl = this.inputForm.get('advanced') as FormControl;
    const editionOne: FormControl = this.inputForm.get('editionOne') as FormControl;

    /// operation on car.buyPrice
    const addPrice = this.car.buyPrice + 2500;
    const removePrice = this.car.buyPrice - 2500;

    /// operation on car.leasingPrice
    const addLeasing = this.car.leasingPrice + 150;
    const removeLeasing = this.car.leasingPrice - 150;

    /// if input checked add number to buyPrice and leasingPrice
    /// reset and disable other controls
    if (event.target.checked) {
      this.car.buyPrice = addPrice;
      this.car.leasingPrice = addLeasing;
      basis.reset({value: null, disabled: true});
      advanced.reset({value: null, disabled: true});
      editionOne.reset({value: null, disabled: true});
    }
    /// if input not checked remove number from buyPrice and leasingPrice
    /// and enable controls
    if (!event.target.checked) {
      basis.enable();
      advanced.enable();
      editionOne.enable();
      basis.setValue(true);
      this.car.buyPrice = removePrice;
      this.car.leasingPrice = removeLeasing;
    }
  }

  onAdvancedCheck(event: any) {
    /// variables to control the form controls
    const basis: FormControl = this.inputForm.get('basis') as FormControl;
    const sLine: FormControl = this.inputForm.get('sLine') as FormControl;
    const editionOne: FormControl = this.inputForm.get('editionOne') as FormControl;

    /// operation on car.buyPrice
    const addPrice = this.car.buyPrice + 1500;
    const removePrice = this.car.buyPrice - 1500;

    /// operation on car.leasingPrice
    const addLeasing = this.car.leasingPrice + 100;
    const removeLeasing = this.car.leasingPrice - 100;

    /// if input checked add number to buyPrice and leasingPrice
    if (event.target.checked) {
      this.car.buyPrice = addPrice;
      this.car.leasingPrice = addLeasing;
      basis.reset({value: null, disabled: true});
      sLine.reset({value: null, disabled: true});
      editionOne.reset({value: null, disabled: true});
    }
    /// if input not checked remove number from buyPrice and leasingPrice
    /// and enable controls
    if (!event.target.checked) {
      basis.enable();
      sLine.enable();
      editionOne.enable();
      basis.setValue(true);
      this.car.buyPrice = removePrice;
      this.car.leasingPrice = removeLeasing;
    }
  }
  onBasisCheck(event: any) {
    /// variables to control the form controls
    const advanced: FormControl = this.inputForm.get('advanced') as FormControl;
    const sLine: FormControl = this.inputForm.get('sLine') as FormControl;
    const editionOne: FormControl = this.inputForm.get('editionOne') as FormControl;
    /// if input checked reset other controls
    if (event.target.checked) {
      advanced.reset({value: null, disabled: true});
      sLine.reset({value: null, disabled: true});
      editionOne.reset({value: null, disabled: true});
      return this.car;
    }
    /// if input not checked enable controls
    if (!event.target.checked) {
      advanced.enable();
      sLine.enable();
      editionOne.enable();
    }
}


//// input events for Extras

onExtraSline(event) {
const interieurSline: FormControl = this.inputForm.get('interieurSline') as FormControl;
/// operation on car.leasingPrice
const addExtra = this.car.extras + 2583;
const removeExtra = this.car.extras - 2583;

/// if input checked add number to extras
if (event.target.checked) {
  this.car.extras = addExtra;
}
/// if input not checked remove number from extras
/// and reset control
if (!event.target.checked) {
  interieurSline.reset();
  this.car.extras = removeExtra;
}
}

onExtraDesign(event) {

}

onExtraPackageOne(event) {

}

onExtraPackageTwo(event) {

}



onSubmit() {
  console.log(this.inputForm.value);
}

/// prevents memory leak --- removes subscription
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
