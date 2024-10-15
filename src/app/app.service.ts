import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialDataService {
  private apiKey = 'RIBXT3XYLI69PC0Q'; // Replace 'demo' with your actual API key
  private apiUrl = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getIncomeStatement(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
