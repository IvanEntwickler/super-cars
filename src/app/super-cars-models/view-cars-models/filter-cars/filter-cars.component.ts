
import { CarModelService } from './../../../car-model.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-filter-cars',
  templateUrl: './filter-cars.component.html',
  styleUrls: ['./filter-cars.component.scss']
})
export class FilterCarsComponent implements OnInit {
  filterForm: FormGroup;
  filterClosed = true;
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
    {name: 'Alternative Antriebe', value: 'Alternative Antriebe'},
    {name: 'g-tron', value: 'g-tron'}, {name: 'Plug-in-Antriebe', value: 'Plug-in-Antriebe'},
    {name: 'Kompakt', value: 'Kompakt'}, {name: 'Sportback', value: 'Sportback'},
    {name: 'Limousine', value: 'Limousine'}, {name: 'Cabriolet', value: 'Cabriolet'},
    {name: 'Sportwagen', value: 'Sportwagen'}, {name: 'Avant', value: 'Avant'},
    {name: 'allroad quattro', value: 'allroad quattro'}, {name: 'Coupe', value: 'Coupe'},
    {name: 'SUV', value: 'SUV'}, {name: 'Roadster', value: 'Roadster'},
    {name: 'Spyder', value: 'Spyder'}, {name: 'Audi Q Modelle', value: 'Audi Q Modelle'},
    {name: 'Audi SQ Modelle', value: 'Audi SQ Modelle'}
  ];

  constructor(private formbuilder: FormBuilder, private carModelService: CarModelService) { }

/// formControls for each category
  ngOnInit() {
    this.filterForm = this.formbuilder.group({
      modelArr: this.formbuilder.array([]),
      vehicleArr: this.formbuilder.array([]),
      price: this.formbuilder.control(25000)
    });
  }

  /// function for the input
  onInputModel(event) {
    const modelArr: FormArray = this.filterForm.get('modelArr') as FormArray;

    /// checks if we selected the input
    /// if true it pushes the value into the Array
    /// else if we unselected the value the function
    /// filters the item.value against the event.target.value
    /// true: removes the control we unselected, false: gives empty Array
    if (event.target.checked) {
      modelArr.push(new FormControl(event.target.value));
    } else {
      modelArr.controls.filter((item: FormControl, index) => {
        return item.value === event.target.value ? modelArr.removeAt(index) : false;
      });
    }
  }

  onInputVehicle(event) {
    const vehicleArr: FormArray = this.filterForm.get('vehicleArr') as FormArray;

    /// checks if we selected the input
    /// if true it pushes the value into the Array
    /// else if we unselected the value the function
    /// filters the item.value against the event.target.value
    /// true: removes the control we unselected, false: gives empty Array
    if (event.target.checked) {
      vehicleArr.push(new FormControl(event.target.value));
    } else {
      vehicleArr.controls.filter((item: FormControl, index) => {
        return item.value === event.target.value ? vehicleArr.removeAt(index) : false;
      });
    }
  }

  /// opens filter Form
  onOpenFilterForm() {
    this.filterClosed = !this.filterClosed;
  }

  /// submiting the form and sending it to the CarModelServcie(observable stream)
  onSubmit() {
    this.carModelService.filterSubject.next(this.filterForm.value);
    console.log(this.filterForm.value);
    console.log(this.filterForm.value.modelArr);
    console.log(this.filterForm.value.vehicleArr);
    console.log(this.filterForm.value.price);
  }

  /// reseting it to the initial values
  onReset() {
    this.filterForm.reset({modelArr: [], vehicleArr: [], price: 25000});
  }

}
