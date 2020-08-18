import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-currency-trends',
  templateUrl: './currency-trends.component.html',
  styleUrls: ['./currency-trends.component.css']
})


export class CurrencyTrendsComponent implements OnInit {
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
    // console.log(this.months)
    // this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    // 'October', 'November', 'December'];
    // this.values = [0.0113403757, 0.0114006886, 0.0117741252, 0.0128303,
    //   0.0121577591, 0.0120694962, 0.012670979, 0.0126312067, 0.0127462415, 0.0127532313, 0.0126127262, 0.0118891927]
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

}
