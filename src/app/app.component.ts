/**
 * @author bindu.m
 * @description App component is the initial component displayed
 * Here, list of currency is being fetched and passed to the child component
 */
import { Component } from '@angular/core';
import { CurrencyListService } from './shared/services/currency-list.service';
import { ConversionRatesService } from './shared/services/conversion-rates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-currency-convertor';
  currencies: any;
  constructor() {
    }
}
