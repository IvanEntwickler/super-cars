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
      extra: this.formbuilder.control('am meisten gekauft'),
      drive1: this.formbuilder.control(null),
      drive2: this.formbuilder.control(null),
      fuel1: this.formbuilder.control(null),
      fuel2: this.formbuilder.control(null),
      driveCard: this.formbuilder.control(null),
  }));
  driveForm$: Observable<FormGroup> = this.driveForm.asObservable();




  /// Lines & Packages Component, configForm
  /// Drive Component, driveForm
  /// interieur
  /// exterieur
  /// summary
}
