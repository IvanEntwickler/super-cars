import { CarModelService } from './../../../car-model.service';
import { Subscription } from 'rxjs';
import { Car } from './../../../interface';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-exterior',
  templateUrl: './exterior.component.html',
  styleUrls: ['./exterior.component.scss']
})
export class ExteriorComponent implements OnInit, OnDestroy {
  car: Car;
  subscription: Subscription;
  carColorUni = [
    'Brillantschwarz',
  ];
  carColorMetallic1 = [
    'Catalunyarot Metallic',
    'Florettsilber Metallic',
    'Galaxisblau Metallic',
    'Gletscherweiß Metallic',
    'Manhattangrau Metallic',
    'Mythosschwarz Metallic',
    'Navarrablau Metallic'
  ];
  carColorMetallic2 = [
    'Ipanemabraun Metallic',
    'Karatbeige Metallic',
    'Korallenorange Metallic',
    'Tangorot Metallic',
    'Avalongrün Metallic',
    'Argusbraun Metallic',
  ];
  carColorPerleffekt = [
    'Goodwoodgrün Perleffekt',
    'Samtviolett Perleffekt',
    'Nachtblau Perleffekt',
    'Sepangblau Perleffekt',
  ];
  carColorIndividual = [
    'Individuallackierungen Audi exclusive',
  ];

  constructor(private carModelService: CarModelService) { }

  ngOnInit(): void {
    this.subscription = this.carModelService.getCarState().subscribe(car => this.car = car);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
