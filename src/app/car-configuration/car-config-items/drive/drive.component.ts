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
    /// filtering if the selected event.target.value is = lineType
    const lineTypeCheck = this.car.motor
    .filter(
      obj => {
        return obj.lineType === event.target.value;
      });
    console.log(lineTypeCheck);
    /// saving the value output into a FormControl
    const control = new FormControl(lineTypeCheck);
    console.log(control);
    /// if true push the FormControl into the AbstractControl[]
    /// else log the event.target.value ---> 'Alle', 'Basis', 'advanced', 'sLine', 'editionOne'
    if (lineTypeCheck) {
      this.getDriveCardControls().push(control);
    } else {
      console.log(event.target.value);
    }

}

getDriveCardControls() {
  return (this.driveForm.get('driveCard') as FormArray).controls;
}
  onDrive1(event) {
    const drive1: FormControl = this.driveForm.get('drive1') as FormControl;
    const drive2: FormControl = this.driveForm.get('drive2') as FormControl;
    const fuel1: FormControl = this.driveForm.get('fuel1') as FormControl;
    const fuel2: FormControl = this.driveForm.get('fuel2') as FormControl;
  }
  onDrive2(event) {
    const drive1: FormControl = this.driveForm.get('drive1') as FormControl;
    const drive2: FormControl = this.driveForm.get('drive2') as FormControl;
    const fuel1: FormControl = this.driveForm.get('fuel1') as FormControl;
    const fuel2: FormControl = this.driveForm.get('fuel2') as FormControl;
  }
  onFuel1(event) {
    const drive1: FormControl = this.driveForm.get('drive1') as FormControl;
    const drive2: FormControl = this.driveForm.get('drive2') as FormControl;
    const fuel1: FormControl = this.driveForm.get('fuel1') as FormControl;
    const fuel2: FormControl = this.driveForm.get('fuel2') as FormControl;
  }
  onFuel2(event) {
    const drive1: FormControl = this.driveForm.get('drive1') as FormControl;
    const drive2: FormControl = this.driveForm.get('drive2') as FormControl;
    const fuel1: FormControl = this.driveForm.get('fuel1') as FormControl;
    const fuel2: FormControl = this.driveForm.get('fuel2') as FormControl;
  }
  onDriveCard(event) {
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
