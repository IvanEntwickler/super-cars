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
  showColorName = false;
  carColorUni = [
    {colorName: 'Brillantschwarz', colorHex1: '#060606'},
  ];
  carColorMetallic1 = [
    {colorName: 'Catalunyarot Metallic' , colorHex2: '#DA1B20'},
    {colorName: 'Florettsilber Metallic', colorHex3: '#8C8C8C'},
    {colorName: 'Galaxisblau Metallic', colorHex4: '#0B2A3D'},
    {colorName: 'Gletscherweiß Metallic', colorHex5: '#F0F8FE'},
    {colorName: 'Manhattangrau Metallic', colorHex6: '#333333'},
    {colorName: 'Mythosschwarz Metallic', colorHex7: '#010B13'},
    {colorName: 'Navarrablau Metallic', colorHex8: '#033F63'}
  ];
  carColorMetallic2 = [
    {colorName: 'Ipanemabraun Metallic', colorHex9: '#783C02'},
    {colorName: 'Karatbeige Metallic', colorHex10: '#F9F0E4'},
    {colorName: 'Korallenorange Metallic', colorHex11: '#F03801'},
    {colorName: 'Tangorot Metallic', colorHex12: '#E60001'},
    {colorName: 'Avalongrün Metallic', colorHex13: '#064E41'},
    {colorName: 'Argusbraun Metallic', colorHex14: '#523A34'},
  ];
  carColorPerleffekt = [
    {colorName: 'Goodwoodgrün Perleffekt', colorHex15: '#09321E'},
    {colorName: 'Samtviolett Perleffekt', colorHex16: '#540A54'},
    {colorName: 'Nachtblau Perleffekt', colorHex17: '#292651'},
    {colorName: 'Sepangblau Perleffekt', colorHex18: '#004990'},
  ];
  carColorIndividual = [
    {colorName: 'Individuallackierungen Audi exclusive'},
  ];

  constructor(private carModelService: CarModelService) { }

  ngOnInit(): void {
    this.subscription = this.carModelService.getCarState().subscribe(car => this.car = car);
  }

  getColor(colorName) {
    switch (colorName) {
      case 'Brillantschwarz':
        return '#060606';
      case 'Catalunyarot Metallic':
        return '#DA1B20';
      case 'Florettsilber Metallic':
        return '#8C8C8C';
      case 'Galaxisblau Metallic':
        return '#0B2A3D';
      case 'Manhattangrau Metallic':
        return '#333333';
      case 'Mythosschwarz Metallic':
        return '#010B13';
      case 'Navarrablau Metallic':
        return '#033F63';
      case 'Ipanemabraun Metallic':
        return '#783C02';
      case 'Karatbeige Metallic':
        return '#F9F0E4';
      case 'Korallenorange Metallic':
        return '#F03801';
      case 'Tangorot Metallic':
        return '#E60001';
      case 'Avalongrün Metallic':
        return '#064E41';
      case 'Argusbraun Metallic':
        return '#523A34';
      case 'Goodwoodgrün Perleffekt':
        return '#09321E';
      case 'Samtviolett Perleffekt':
        return '#540A54';
      case 'Nachtblau Perleffekt':
        return '#292651';
      case 'Sepangblau Perleffekt':
        return '#004990';
    }
  }

  onClickColor() {
    this.showColorName = !this.showColorName;
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
