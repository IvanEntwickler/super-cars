import { Car } from './interface';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

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

  getfilteredCars(formdata: any): Observable<Car[]> {
    return this.http
    .get<Car[]>(`/${this.modelsUrl}/?model=${formdata.modelArr}`);
  }
}

