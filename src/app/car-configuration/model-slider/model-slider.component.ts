
import { Car } from './../../interface';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-model-slider',
  templateUrl: './model-slider.component.html',
  styleUrls: ['./model-slider.component.scss']
})
export class ModelSliderComponent implements OnInit {
  @Input() car: Car;
  slideIndex = 0;


  /// gets into the template n becomes +1 or -1
  plusElement(n: number) {
  this.showImage(this.slideIndex += n);
}



  /// takes number as a parameter
  showImage(n: number) {
    /// if this number is greater than or equal to the array length
    /// lets the image-array start at the beginning (slideIndex=0)
    if (n >= this.car.imageUrl.length) {
      this.slideIndex = 0;
    }
    /// if this number is smaller than 0
    /// lets the get back to the last image of the array (this.car.imageUrl.length - 1)
    if (n < 0) {
      this.slideIndex = this.car.imageUrl.length - 1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
