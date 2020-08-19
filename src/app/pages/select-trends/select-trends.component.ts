/**
 * @author bindu.m
 * @description This is the parent component for show trends
 */
import { Component, OnInit } from '@angular/core';
import { CurrencyListService } from '../../shared/services/currency-list.service';

@Component({
  selector: 'app-select-trends',
  templateUrl: './select-trends.component.html',
  styleUrls: ['./select-trends.component.css']
})
export class SelectTrendsComponent implements OnInit {

  currencies: any;

  constructor(private currencyListService: CurrencyListService) {
    this.currencies = this.currencyListService.getCurrencies();
  }

  ngOnInit() {
  }

}
