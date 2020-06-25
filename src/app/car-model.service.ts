import { Car } from './interface';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {
  private modelsUrls = 'api/models';

  constructor(private http: HttpClient) { }

  getCarModels(): Observable<Car[]> {
    return this.http.get<Car[]>(this.modelsUrls);
  }
}

