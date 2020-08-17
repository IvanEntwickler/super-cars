import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConfigFormService {
  /// creating a shareable resource for multiple forms
  constructor(private formbuilder: FormBuilder) { }
  configForm: BehaviorSubject<FormGroup | undefined> =
  new BehaviorSubject(this.formbuilder.group({
      basis: this.formbuilder.control(true),
      advanced: this.formbuilder.control(null),
      sLine: this.formbuilder.control(null),
      editionOne: this.formbuilder.control(null),
      interieurSline: this.formbuilder.control(null),
      interieurDesign: this.formbuilder.control(null),
      packageOne: this.formbuilder.control(null),
      packageTwo: this.formbuilder.control(null),
  }));
  configForm$: Observable<FormGroup> = this.configForm.asObservable();

  driveForm: BehaviorSubject<FormGroup | undefined> =
  new BehaviorSubject(this.formbuilder.group({
      extra: this.formbuilder.control('Bitte einen Antrieb auswählen'),
      drive1: this.formbuilder.control(null),
      drive2: this.formbuilder.control(null),
      fuel1: this.formbuilder.control(null),
      fuel2: this.formbuilder.control(null),
      driveCard: this.formbuilder.array([]),
  }));
  driveForm$: Observable<FormGroup> = this.driveForm.asObservable();

  exForm: BehaviorSubject<FormGroup | undefined> =
  new BehaviorSubject(this.formbuilder.group({
    carExColor: this.formbuilder.control(null),
    carExwheels: this.formbuilder.control(null),
    carExlights: this.formbuilder.control(null)
  }));
  exForm$: Observable<FormGroup> = this.exForm.asObservable();



  /// Lines & Packages Component, configForm
  /// Drive Component, driveForm
  /// exterieur, exForm
  /// interieur
  /// summary
}
