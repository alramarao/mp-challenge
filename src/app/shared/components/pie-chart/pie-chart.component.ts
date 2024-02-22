import { Component, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  @Input()
  set labels(values: string[]) {
    if(values && values.length > 0) {this.pieChartLabels = values;}
  }

  @Input()
  set dataSets(values: number[]) {
    if(values && values.length > 0) {
      this.pieChartDatasets[0].data = values;
    }
  }
  // Pie

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  pieChartLabels:string[] = [];
  pieChartDatasets = [
    {
      data: <number[]>[],
    },
  ];
  pieChartLegend = true;
  pieChartPlugins = [];
}
