import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ConfigFormService } from './../../../config-form.service';
import { Subscription } from 'rxjs';
import { Car } from './../../../interface';
import { CarModelService } from './../../../car-model.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit, OnDestroy {
  car: Car;
  subscription: Subscription;
  formSub: Subscription;
  driveForm: FormGroup;


  constructor(
    private carModelService: CarModelService,
    private configFormService: ConfigFormService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    /// getting the car State
    this.subscription = this.carModelService.getCarState().subscribe(car => this.car = car);
    /// getting the driveForm from Service
    this.formSub = this.configFormService.driveForm$.subscribe(form => this.driveForm = form);
  }

  onSelectOptions(event) {
    /// variable to control the form controls
    const lineTypeCheck = this.car.motor
    .filter(
      obj => {
        return obj.lineType === 'Basis';
      });
    console.log(lineTypeCheck);
    const control = new FormControl(lineTypeCheck.values());
    if (lineTypeCheck) {
      return this.getDriveCardControls().push(control);
    } else {
      console.log(event.target.value);
    }

}

getDriveCardControls() {
  return (this.driveForm.get('driveCard') as FormArray).controls;
}
  onDrive1() {
    const drive1: FormControl = this.driveForm.get('drive1') as FormControl;
    const drive2: FormControl = this.driveForm.get('drive2') as FormControl;
    const fuel1: FormControl = this.driveForm.get('fuel1') as FormControl;
    const fuel2: FormControl = this.driveForm.get('fuel2') as FormControl;
  }
  onDrive2() {
    const drive1: FormControl = this.driveForm.get('drive1') as FormControl;
    const drive2: FormControl = this.driveForm.get('drive2') as FormControl;
    const fuel1: FormControl = this.driveForm.get('fuel1') as FormControl;
    const fuel2: FormControl = this.driveForm.get('fuel2') as FormControl;
  }
  onFuel1() {
    const drive1: FormControl = this.driveForm.get('drive1') as FormControl;
    const drive2: FormControl = this.driveForm.get('drive2') as FormControl;
    const fuel1: FormControl = this.driveForm.get('fuel1') as FormControl;
    const fuel2: FormControl = this.driveForm.get('fuel2') as FormControl;
  }
  onFuel2() {
    const drive1: FormControl = this.driveForm.get('drive1') as FormControl;
    const drive2: FormControl = this.driveForm.get('drive2') as FormControl;
    const fuel1: FormControl = this.driveForm.get('fuel1') as FormControl;
    const fuel2: FormControl = this.driveForm.get('fuel2') as FormControl;
  }
  onDriveCard() {
    const driveCard: FormControl = this.driveForm.get('driveCard') as FormControl;
  }

  onSubmit() {
    console.log(this.driveForm.value);
    this.router.navigate(['../exterieur'], {relativeTo: this.route});
  }

  /// prevents memory leak --- removes subscription
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.formSub.unsubscribe();
  }

}
