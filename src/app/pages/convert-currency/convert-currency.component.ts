/**
 * @author bindu.m
 * @description This is the parent component for currency conversion
 */
import { Component, OnInit } from '@angular/core';
import { CurrencyListService } from '../../shared/services/currency-list.service';

@Component({
  selector: 'app-convert-currency',
  templateUrl: './convert-currency.component.html',
  styleUrls: ['./convert-currency.component.css']
})
export class ConvertCurrencyComponent implements OnInit {
  currencies: any;

  constructor(private currencyListService: CurrencyListService) {
    this.currencies = this.currencyListService.getCurrencies();
  }

  ngOnInit() {
  }

}
