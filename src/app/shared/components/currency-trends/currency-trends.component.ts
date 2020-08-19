import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-currency-trends',
  templateUrl: './currency-trends.component.html',
  styleUrls: ['./currency-trends.component.css']
})


export class CurrencyTrendsComponent implements OnInit, OnChanges {
  @Input() months: any;
  @Input() values: any;
  @Input() baseCurrency;
  lineChartData: ChartDataSets[];
  lineChartOptions: any;
  lineChartColors: Color[];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  lineChartLabels: Label[]
  
  constructor() {
  }


  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }
  ngOnInit() {
    this.lineChartData = [
      { data: this.values, label: 'Trend in INR against ' + this.baseCurrency },
    ];
    this.lineChartLabels = this.months;

    this.lineChartOptions = {
      responsive: true,
    };

    this.lineChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(255,255,0,0.28)',
      },
    ];
  
  }

ngOnChanges(changes: SimpleChanges) {
  // if (changes.values && changes.baseCurrency) {}
  // this.lineChartData = [
  //   { data: changes.values.currentValue, label: 'Trend in INR against ' + changes.baseCurrency.currentValue },
  // ];
  // this.lineChartLabels = changes.months.currentValue;

  // this.lineChartOptions = {
  //   responsive: true,
  // };

  // this.lineChartColors = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,255,0,0.28)',
  //   },
  // ];
}

}
