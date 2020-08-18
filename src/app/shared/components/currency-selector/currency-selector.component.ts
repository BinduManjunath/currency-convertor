/**
 * @author bindu.m
 * @description This component handles the functionality of currency seclection and displaying the rates and trends
 */
import { Component, OnInit, Input } from '@angular/core';
import { ConversionRatesService } from '../../services/conversion-rates.service';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})

export class CurrencySelectorComponent implements OnInit {

  @Input() currencies: any;
  currencyArray: string[];
  otherCurrencyCode = 'INR';
  amount: any;
  baseCurrencyCode: any;
  otherCurrencyConversionRate: any;
  submit: boolean;
  constructor(public currencyService: ConversionRatesService) { }

  /**
   * On init
   */
  ngOnInit() {
    if (this.currencies) {
      this.currencyArray = Object.keys(this.currencies);
      this.baseCurrencyCode = this.currencyArray[0];
    }
  }

  /**
   * This method is called when currency is changed
   * @param value selected currency
   */
  selectCurrency(value) {
    this.baseCurrencyCode = value;
    this.onConvertClick();
  }

  /**
   * This method is called when amount is changed
   * @param event change event
   */
  changeCurrency(event) {
    this.amount = event.target.value;
    this.onConvertClick();
  }


  /**
   * This method is called on click of convert
   */
  async onConvertClick() {
    const res = await this.currencyService.getLatestExchangeRates(this.baseCurrencyCode).subscribe((con) => {
       this.otherCurrencyConversionRate = con.rates.INR;
       this.submit = true;
      });

  }

}
