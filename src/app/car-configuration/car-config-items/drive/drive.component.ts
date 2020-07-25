import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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
  car: Car[];
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
    this.subscription = this.carModelService.getCarState().subscribe(car => this.car = Object.values(car).slice());
    /// getting the driveForm from Service
    this.formSub = this.configFormService.driveForm$.subscribe(form => this.driveForm = form);
  }

  onSelectOptions(event) {
    /// variable to control the form controls
    const extra: FormControl = this.driveForm.get('extras') as FormControl;
  }
  onDrive1() {}
  onDrive2() {}
  onFuel1() {}
  onFuel2() {}
  onDriveCard() {}

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
