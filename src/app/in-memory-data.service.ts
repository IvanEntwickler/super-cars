import { Car } from './interface';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const models = [
      {model: 'e-tron' , name: 'Audi e-tron' , buyPrice: 69100 , leasingPrice: 514 , imageUrl: '', id: 1, priceRange: 75000 },
      {model: 'e-tron' , name: 'Audi e-tron Sportback' , buyPrice: 71350 , leasingPrice: 531, imageUrl: '', id: 2, priceRange: 75000},
      {model: 'A1', name: 'Sportback', buyPrice: 20300 , leasingPrice: 161 , imageUrl: '',  id: 3, priceRange: 25000},
      {model: 'A1', name: 'citycarver', buyPrice: 22100 , leasingPrice: 169 , imageUrl: '',  id: 4, priceRange: 25000},
      {model: 'A3', name: 'Sportback', buyPrice: 26800 , leasingPrice: 205 , imageUrl: '',  id: 5, priceRange: 50000},
      {model: 'A3', name: 'Sportback e-tron', buyPrice: 37900 , leasingPrice: 269 , imageUrl: '',  id: 6, priceRange: 50000},
      {model: 'A3', name: 'Limousine', buyPrice: 27700 , leasingPrice: 212 , imageUrl: '',  id: 7, priceRange: 50000},
      {model: 'A3', name: 'Cabriolet', buyPrice: 34600 , leasingPrice: 239 , imageUrl: '',  id: 8, priceRange: 50000},
      {model: 'S3', name: 'Cabriolet TSFI', buyPrice: 52300 , leasingPrice: 404 , imageUrl: '',  id: 9, priceRange: 75000},
      {model: 'RS 3', name: 'Sportback', buyPrice: 56000 , leasingPrice: 444 , imageUrl: '',  id: 10, priceRange: 75000},
      {model: 'RS 3', name: 'Limousine', buyPrice: 58000 , leasingPrice: 465 , imageUrl: '',  id: 11, priceRange: 75000},
      {model: 'A4', name: 'Limousine', buyPrice: 33600 , leasingPrice: 267 , imageUrl: '',  id: 12, priceRange: 50000},
      {model: 'A4', name: 'Avant', buyPrice: 35250 , leasingPrice: 271 , imageUrl: '',  id: 13, priceRange: 50000},
      {model: 'A4', name: 'Avant g-tron', buyPrice: 43200 , leasingPrice: 333 , imageUrl: '',  id: 14, priceRange: 50000},
      {model: 'A4', name: 'allroad quattro', buyPrice: 50100 , leasingPrice: 399 , imageUrl: '',  id: 15, priceRange: 75000},
      {model: 'S4', name: 'Limousine TDI', buyPrice: 62600 , leasingPrice: 552 , imageUrl: '',  id: 16, priceRange: 75000},
      {model: 'S4', name: 'Avant TDI', buyPrice: 64250 , leasingPrice: 531 , imageUrl: '',  id: 17, priceRange: 75000},
      {model: 'RS 4', name: 'Avant', buyPrice: 81400 , leasingPrice: 718 , imageUrl: '',  id: 18, priceRange: 100000},
      {model: 'A5', name: 'Coupe', buyPrice: 42900 , leasingPrice: 319 , imageUrl: '',  id: 19, priceRange: 50000},
      {model: 'A5', name: 'Sportback', buyPrice: 42900 , leasingPrice: 325 , imageUrl: '',  id: 20, priceRange: 50000},
      {model: 'A5', name: 'Sportback g-tron', buyPrice: 45100 , leasingPrice: 342 , imageUrl: '',  id: 21, priceRange: 50000},
      {model: 'A5', name: 'Cabriolet', buyPrice: 49100 , leasingPrice: 365 , imageUrl: '',  id: 22, priceRange: 50000},
      {model: 'S5', name: 'Spotback TDI', buyPrice: 66500 , leasingPrice: 539 , imageUrl: '',  id: 23, priceRange: 75000},
      {model: 'S5', name: 'Cabriolet TSFI', buyPrice: 69800 , leasingPrice: 557 , imageUrl: '',  id: 24, priceRange: 75000},
      {model: 'RS 5', name: 'Coupe', buyPrice: 83500 , leasingPrice: 737 , imageUrl: '',  id: 25, priceRange: 100000},
      {model: 'RS 5', name: 'Sportback', buyPrice: 83500 , leasingPrice: 747 , imageUrl: '',  id: 26, priceRange: 100000},
      {model: 'A6', name: 'Limousine', buyPrice: 48090 , leasingPrice: 383 , imageUrl: '',  id: 27, priceRange: 50000},
      {model: 'A6', name: 'Limousine TSFI e', buyPrice: 58700 , leasingPrice: 502 , imageUrl: '',  id: 28, priceRange: 75000},
      {model: 'A6', name: 'Avant', buyPrice: 50590 , leasingPrice: 403 , imageUrl: '',  id: 29, priceRange: 75000},
      {model: 'A6', name: 'Avant TSFI e', buyPrice: 71940 , leasingPrice: 615 , imageUrl: '',  id: 30, priceRange: 75000},
      {model: 'A6', name: 'allroad quattro', buyPrice: 62090 , leasingPrice: 495 , imageUrl: '',  id: 31, priceRange: 75000},
      {model: 'S6', name: 'Limousine TDI', buyPrice: 77090 , leasingPrice: 635 , imageUrl: '',  id: 32, priceRange: 100000},
      {model: 'S6', name: 'Avant TDI', buyPrice: 79590 , leasingPrice: 656 , imageUrl: '',  id: 33, priceRange: 100000},
      {model: 'RS 6', name: 'Avant', buyPrice: 117500 , leasingPrice: 1098 , imageUrl: '',  id: 34, priceRange: 125000},
      {model: 'A7', name: 'Sportback', buyPrice: 58940 , leasingPrice: 501 , imageUrl: '',  id: 35, priceRange: 75000 },
      {model: 'A7', name: 'Sportback TSFI e', buyPrice: 67900 , leasingPrice: 599 , imageUrl: '',  id: 36, priceRange: 75000},
      {model: 'S7', name: 'Sportback TDI', buyPrice: 83340 , leasingPrice: 709 , imageUrl: '',  id: 37, priceRange: 100000},
      {model: 'RS 7', name: 'Sportback', buyPrice: 121000 , leasingPrice: 1196 , imageUrl: '',  id: 38, priceRange: 125000},
      {model: 'A8', name: '', buyPrice: 94150 , leasingPrice: 770 , imageUrl: '',  id: 39, priceRange: 100000 },
      {model: 'A8', name: 'L', buyPrice: 97650 , leasingPrice: 799 , imageUrl: '',  id: 40, priceRange: 100000},
      {model: 'A8', name: 'TSFI e', buyPrice: 106700 , leasingPrice: 992 , imageUrl: '',  id: 41, priceRange: 125000},
      {model: 'A8', name: 'L TSFI e', buyPrice: 110200 , leasingPrice: 1024 , imageUrl: '',  id: 42, priceRange: 125000},
      {model: 'S8', name: 'TSFI', buyPrice: 140600 , leasingPrice: 1226 , imageUrl: '',  id: 43, priceRange: 150000},
      {model: 'Q2', name: '', buyPrice: 24400 , leasingPrice: 182 , imageUrl: '',  id: 44, priceRange: 25000 },
      {model: 'SQ2', name: 'TSFI ', buyPrice: 44800 , leasingPrice: 357 , imageUrl: '',  id: 45, priceRange: 50000},
      {model: 'Q3', name: '', buyPrice: 34400 , leasingPrice: 254 , imageUrl: '',  id: 46, priceRange: 50000},
      {model: 'Q3', name: 'Sportback', buyPrice: 36000 , leasingPrice: 256 , imageUrl: '',  id: 47, priceRange: 50000},
      {model: 'RS Q3', name: '', buyPrice: 63500 , leasingPrice: 557 , imageUrl: '',  id: 48, priceRange: 75000},
      {model: 'RS Q3', name: 'Sportback', buyPrice: 65000 , leasingPrice: 570 , imageUrl: '',  id: 49, priceRange: 75000},
      {model: 'Q5', name: '', buyPrice: 44700 , leasingPrice: 332 , imageUrl: '',  id: 50, priceRange: 50000 },
      {model: 'Q5', name: 'TSFI e', buyPrice: 53800 , leasingPrice: 450, imageUrl: '',  id: 51, priceRange: 75000 },
      {model: 'SQ5', name: 'TDI', buyPrice: 68900 , leasingPrice: 481 , imageUrl: '',  id: 52, priceRange: 75000},
      {model: 'Q7', name: '', buyPrice: 71900 , leasingPrice: 531 , imageUrl: '',  id: 53, priceRange: 75000 },
      {model: 'Q7', name: 'TSFI e', buyPrice: 75700 , leasingPrice: 623, imageUrl: '',  id: 54, priceRange: 100000 },
      {model: 'SQ7', name: 'TDI', buyPrice: 95700 , leasingPrice: 706 , imageUrl: '',  id: 55, priceRange: 100000},
      {model: 'Q8', name: '', buyPrice: 77900 , leasingPrice: 662 , imageUrl: '',  id: 56, priceRange: 100000 },
      {model: 'Q8', name: 'TDI', buyPrice: 103700 , leasingPrice: 743, imageUrl: '',  id: 57, priceRange: 125000 },
      {model: 'RS', name: 'Q8', buyPrice: 129500 , leasingPrice: 1107 , imageUrl: '',  id: 58, priceRange: 150000},
      {model: 'TT', name: 'Coupe', buyPrice: 37050 , leasingPrice: 251 , imageUrl: '',  id: 59, priceRange: 50000},
      {model: 'TT', name: 'Roadster', buyPrice: 39450 , leasingPrice: 267 , imageUrl: '',  id: 60, priceRange: 50000},
      {model: 'TTS', name: 'Coupe TSFI', buyPrice: 55550 , leasingPrice: 467 , imageUrl: '',  id: 61, priceRange: 75000},
      {model: 'TTS', name: 'Roadster TSFI', buyPrice: 58350 , leasingPrice: 491 , imageUrl: '',  id: 62, priceRange: 75000},
      {model: 'TT RS', name: 'Coupe', buyPrice: 68250 , leasingPrice: 666 , imageUrl: '',  id: 63, priceRange: 75000},
      {model: 'TT RS', name: 'Roadster', buyPrice: 71050, leasingPrice: 693 , imageUrl: '',  id: 64, priceRange: 75000},
      {model: 'R8', name: 'Coupe V10 RWD', buyPrice: 37050 , leasingPrice: 251 , imageUrl: '',  id: 65, priceRange: 50000},
      {model: 'R8', name: 'Coupe V10', buyPrice: 39450 , leasingPrice: 267 , imageUrl: '',  id: 66, priceRange: 50000},
      {model: 'R8', name: 'Coupe V10 performance', buyPrice: 55550 , leasingPrice: 467 , imageUrl: '',  id: 67, priceRange: 75000},
      {model: 'R8', name: 'Spyder V10 RWD', buyPrice: 58350 , leasingPrice: 491 , imageUrl: '',  id: 68, priceRange: 75000},
      {model: 'R8', name: 'Spyder V10', buyPrice: 68250 , leasingPrice: 666 , imageUrl: '',  id: 69, priceRange: 75000},
      {model: 'R8', name: 'Spyder V10 performance', buyPrice: 71050, leasingPrice: 693 , imageUrl: '',  id: 70, priceRange: 75000},
    ];
    return {models};
  }

  genId(models: Car[]): number {
    return models.length > 0 ? Math.max(...models.map(model => model.id)) + 1 : 1;
  }
}
