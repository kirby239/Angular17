import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiResponse } from '../util/apiResponse';

const URL = environment.HOST;


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(protected http: HttpClient) { }
  getService(endpoint: string): Observable<any[]> {
    return this.http.get<any[]>(URL + endpoint);
  }
}
