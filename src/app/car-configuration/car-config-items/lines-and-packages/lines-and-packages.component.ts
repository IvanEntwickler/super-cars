import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(
    private carModelService: CarModelService,
    private formbuilder: FormBuilder,
    // private router: Router,
    // private route: ActivatedRoute
    ) { }

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
    const addLeasing = this.car.leasingPrice + 50;
    const removeLeasing = this.car.leasingPrice - 50;

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
    const addLeasing = this.car.leasingPrice + 40;
    const removeLeasing = this.car.leasingPrice - 40;

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
    const addLeasing = this.car.leasingPrice + 30;
    const removeLeasing = this.car.leasingPrice - 30;

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
const interieurDesign: FormControl = this.inputForm.get('interieurDesign') as FormControl;
/// operation on car.extras
const addExtra = this.car.extras + 2583;
const removeExtra = this.car.extras - 2583;

/// operation on car.leasingPrice
const addLeasing = this.car.leasingPrice + 10;
const removeLeasing = this.car.leasingPrice - 10;

/// if input checked add number to extras and disables other package
if (event.target.checked) {
  interieurDesign.reset({value: null, disabled: true});
  this.car.leasingPrice = addLeasing;
  this.car.extras = addExtra;
}
/// if input not checked remove number from extras
/// and reset and enables control
if (!event.target.checked) {
  interieurSline.reset();
  interieurDesign.enable();
  this.car.extras = removeExtra;
  this.car.leasingPrice = removeLeasing;
}
}

onExtraDesign(event) {
  const interieurDesign: FormControl = this.inputForm.get('interieurDesign') as FormControl;
  const interieurSline: FormControl = this.inputForm.get('interieurSline') as FormControl;
  /// operation on car.leasingPrice
  const addExtra = this.car.extras + 2583;
  const removeExtra = this.car.extras - 2583;

  /// operation on car.leasingPrice
  const addLeasing = this.car.leasingPrice + 10;
  const removeLeasing = this.car.leasingPrice - 10;

  /// if input checked add number to extras and disables other package
  if (event.target.checked) {
    interieurSline.reset({value: null, disabled: true});
    this.car.leasingPrice = addLeasing;
    this.car.extras = addExtra;
  }
  /// if input not checked remove number from extras
  /// and reset enables control
  if (!event.target.checked) {
    interieurDesign.reset();
    interieurSline.enable();
    this.car.extras = removeExtra;
    this.car.leasingPrice = removeLeasing;
  }
}

onExtraPackageOne(event) {
  const packageOne: FormControl = this.inputForm.get('packageOne') as FormControl;
  /// operation on car.extras
  const addExtra = this.car.extras + 2388;
  const removeExtra = this.car.extras - 2388;

  /// operation on car.leasingPrice
  const addLeasing = this.car.leasingPrice + 10;
  const removeLeasing = this.car.leasingPrice - 10;

  /// if input checked add number to extras
  if (event.target.checked) {
    this.car.extras = addExtra;
    this.car.leasingPrice = addLeasing;
  }
  /// if input not checked remove number from extras
  /// and reset control
  if (!event.target.checked) {
    packageOne.reset();
    this.car.extras = removeExtra;
    this.car.leasingPrice = removeLeasing;
  }
}

onExtraPackageTwo(event) {
  const packageTwo: FormControl = this.inputForm.get('packageTwo') as FormControl;
  /// operation on car.extras
  const addExtra = this.car.extras + 3704;
  const removeExtra = this.car.extras - 3704;

  /// operation on car.leasingPrice
  const addLeasing = this.car.leasingPrice + 15;
  const removeLeasing = this.car.leasingPrice - 15;

  /// if input checked add number to extras
  if (event.target.checked) {
    this.car.extras = addExtra;
    this.car.leasingPrice = addLeasing;
  }
  /// if input not checked remove number from extras
  /// and reset control
  if (!event.target.checked) {
    packageTwo.reset();
    this.car.extras = removeExtra;
    this.car.leasingPrice = removeLeasing;
  }
}

// onClickAntrieb() {
// this.router.navigate(['../antrieb'], {relativeTo: this.route});
// }

onSubmit() {
  console.log(this.inputForm);
}

/// prevents memory leak --- removes subscription
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
