import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConfigFormService {
  /// creating a shareable resource for multiple forms
  configForm: BehaviorSubject<FormGroup | undefined> =
  new BehaviorSubject(this.formbuilder.group({
    inputForm: this.formbuilder.group({
      basis: this.formbuilder.control(true),
      advanced: this.formbuilder.control(null),
      sLine: this.formbuilder.control(null),
      editionOne: this.formbuilder.control(null),
      interieurSline: this.formbuilder.control(null),
      interieurDesign: this.formbuilder.control(null),
      packageOne: this.formbuilder.control(null),
      packageTwo: this.formbuilder.control(null),
    }),
  }));
  configForm$: Observable<FormGroup> = this.configForm.asObservable();
  constructor(private formbuilder: FormBuilder) { }



  /// Lines & Packages Component, inputForm
  /// Drive Component
  /// interieur
  /// exterieur
  /// summary
}
