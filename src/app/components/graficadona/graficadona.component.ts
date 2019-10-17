import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graficadona',
  templateUrl: './graficadona.component.html',
  styles: []
})
export class GraficadonaComponent implements OnInit {

  @Input() doughnutChartLabels: Label[];
  @Input() doughnutChartData: MultiDataSet[];
  @Input() doughnutChartType: ChartType;
  @Input() leyenda: string;
  /*public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100]];
  public doughnutChartType: ChartType = 'doughnut';*/

  constructor() {}

  ngOnInit() {}
}
