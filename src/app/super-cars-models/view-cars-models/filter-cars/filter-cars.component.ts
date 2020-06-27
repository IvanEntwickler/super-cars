import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-filter-cars',
  templateUrl: './filter-cars.component.html',
  styleUrls: ['./filter-cars.component.scss']
})
export class FilterCarsComponent implements OnInit {
  filterForm: FormGroup;
  modelArray = [
    {name: 'e-tron', value: 'e-tron'},
    {name: 'A1', value: 'A1'},
    {name: 'A3', value: 'A3'},
    {name: 'A4', value: 'A4'},
    {name: 'A5', value: 'A5'},
    {name: 'A6', value: 'A6'},
    {name: 'A7', value: 'A7'},
    {name: 'A8', value: 'A8'},
    {name: 'Q2', value: 'Q2'},
    {name: 'Q5', value: 'Q5'},
    {name: 'Q7', value: 'Q7'},
    {name: 'Q8', value: 'Q8'},
    {name: 'TT', value: 'TT'},
    {name: 'R8', value: 'R8'},
    {name: 'RS', value: 'RS'}
  ];
  vehicleArray = [
    'Alternative Antriebe', 'g-tron', 'Plug-in-Antriebe',
    'Kompakt', 'Sportback', 'Limousine', 'Cabriolet',
    'Sportwagen', 'Avant', 'allroad quattro', 'Coupe',
    'SUV', 'Roadster', 'Spyder', 'Audi Q Modelle', 'Audi SQ Modelle'
  ];

  constructor() { }

/// formControls for each category
  ngOnInit() {
    this.filterForm = new FormGroup({
      modelArr: new FormArray([]),
      vehicle: new FormControl(),
      price: new FormControl('25000')
    });
  }

  getControls() {
    return (this.filterForm.get('modelArr') as FormArray).controls;
  }

  /// submiting the form and reseting it to the initial values
  onSubmit() {
    console.log(this.filterForm);
  }

  onReset() {
    this.filterForm.reset({model: false, vehicle: false, price: '25000'});
  }

}
