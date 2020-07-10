import { Car } from './interface';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {
  car: Car;
  carState = new Subject<Car>();
  filterSubject = new Subject<any>();
  private modelsUrl = 'api/models'; /// URL structure of the web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
    ) { }

  /// gets the cars from database
  getCarModels(): Observable<Car[]> {
      return this.http.get<Car[]>(this.modelsUrl);
  }

  /// gets the cars from database and compares the query string to the formdata
  getfilteredCars(formdata: any): Observable<Car[]> {
    return this.http
    .get<Car[]>(`/${this.modelsUrl}/?model=${formdata.modelArr}&name=${formdata.vehicleArr}&priceRange=${formdata.price}`);
  }

  /// gets car with fitting id
  getCarById(id: number): Subject<Car> {
    const url = `${this.modelsUrl}/${id}`;
    this.http.get<Car>(url).subscribe(v => {
      this.carState.next(v);
    });
    return this.carState;
  }

  getCarState() {
    this.carState.next(this.car);
  }
}

