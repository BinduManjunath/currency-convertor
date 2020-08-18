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
  monthArr: any[];
  dateArr: any[];
  trendInCurrency = [];
  isTrend: boolean;
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

  /**
   * This method is called on click of trends
   */
  async getTrends() {
    const res = await this.currencyService.getTrendRates('2019-08-18', '2020-08-18').subscribe((con) => {
      const keys = Object.keys(con.rates);
      this.monthArr = [];
      this.dateArr = [];
      this.trendInCurrency = [];
      keys.forEach((key: any, index: any) => {
        const month = key.split('-')[1];
        const ind = this.monthArr.indexOf(month);
        if (ind === -1) {
          this.monthArr.push(month);
          this.dateArr.push(key);
        }
      });
      console.log("datearr", this.dateArr)
      if (this.dateArr.length > 0) {
        this.dateArr.forEach((date: any, ind: any) => {
          const value = con.rates[date];
          if (value) {
            this.trendInCurrency.push(value[this.baseCurrencyCode]);
          }
        });
        console.log("trendCurre", this.trendInCurrency)
      }
      this.isTrend = true;
    });

  }

}
