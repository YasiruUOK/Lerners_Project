import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Results } from '../model/results.model';

const baseUrl = 'http://localhost:58331/api/';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  selectedIndexNumer: Results | undefined;

  constructor(private httpClient : HttpClient) { }

  get(IndexNumber: any): Observable<any> {
    return this.httpClient.get(baseUrl+'getResults/'+IndexNumber);
  }
}

