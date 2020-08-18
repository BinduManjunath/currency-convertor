/**
 * @authe
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { ExchangeRates } from '../model/exchange-rates.model';

@Injectable({providedIn: 'root'})
export class ConversionRatesService {


  private readonly apiEndpoint = 'https://api.exchangeratesapi.io/latest';

  constructor(private http: HttpClient) {}

  getLatestExchangeRates(baseCurrencyCode: string): any {
    return this.http.get<ExchangeRates>(
      `${this.apiEndpoint}/?base=${baseCurrencyCode}&symbols=INR`
    );
  }
}
