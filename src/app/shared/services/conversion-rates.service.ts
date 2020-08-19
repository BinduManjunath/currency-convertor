/**
 * @authe
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { ExchangeRates } from '../model/exchange-rates.model';

@Injectable({providedIn: 'root'})
export class ConversionRatesService {


  private readonly apiEndpoint = 'https://api.exchangeratesapi.io/latest';
  private readonly apihistory = 'https://api.exchangeratesapi.io/history';

  constructor(private http: HttpClient) {}

  getLatestExchangeRates(baseCurrencyCode: string): any {
    return this.http.get<ExchangeRates>(
      `${this.apiEndpoint}/?base=${baseCurrencyCode}&symbols=INR`
    );
  }

  getTrendRates(baseCurrencyCode: any, fromDate: String, toDate: String) {
    return this.http.get<ExchangeRates>(
      `${this.apihistory}?start_at=${fromDate}&end_at=${toDate}&base=${baseCurrencyCode}`
    );
  }
}
