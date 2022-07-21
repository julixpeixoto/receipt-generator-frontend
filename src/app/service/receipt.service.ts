import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../model/response.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiUrl;
  }

  sendData(data: any): Observable<Response>{
    return this.httpClient.post<Response>(this.url, data);
  }
}
