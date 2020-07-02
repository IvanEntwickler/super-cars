import { Car } from './interface';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {
  filterSubject = new Subject<any>();
  getTheCars = true;
  private modelsUrl = 'api/models'; /// URL structure of the web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /// gets the cars from database
  getCarModels(): Observable<Car[]> {
      return this.http.get<Car[]>(this.modelsUrl);
  }

  /// gets the cars from database with a query string of the formdata
  getfilteredCars(formdata: any): Observable<Car[]> {
    return this.http
    .get<Car[]>(`/${this.modelsUrl}/?model=${formdata.modelArr}&name=${formdata.vehicleArr}`);
  }
}

