import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-cars',
  templateUrl: './filter-cars.component.html',
  styleUrls: ['./filter-cars.component.scss']
})
export class FilterCarsComponent implements OnInit {
  filterForm: FormGroup;
  modelArray = [
    'e-tron', 'A1', 'A3', 'A4',
    'A5', 'A6', 'A7', 'A8',
    'Q2', 'Q5', 'Q7', 'Q8', 'TT', 'R8', 'RS'
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
      model: new FormControl(),
      vehicle: new FormControl(),
      price: new FormControl('25000')
    });
  }

  /// submiting the form and reseting it to the initial values
  onSubmit() {
    console.log(this.filterForm);
  }

  onReset() {
    this.filterForm.reset({model: false, vehicle: false, price: '25000'});
  }

}
