import { Car } from './interface';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {
  private modelsUrls = 'api/models'; /// URL structure of the web api

  constructor(private http: HttpClient) { }

  /// gets the cars from database
  getCarModels(): Observable<Car[]> {
    return this.http.get<Car[]>(this.modelsUrls);
  }
}

