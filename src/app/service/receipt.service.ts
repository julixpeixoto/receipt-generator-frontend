import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:8080/api"
  }

  sendData(data: any): Observable<Response>{
    return this.httpClient.post<Response>(this.url, data);
  }
}
