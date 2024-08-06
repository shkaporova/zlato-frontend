import { Component } from '@angular/core';
import { BaseChartDirective, provideCharts } from 'ng2-charts';
import { ChartConfiguration, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'ns-chart',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [
    provideCharts({
      registerables,
    }),
  ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Income',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,169,159,1)',
        pointBackgroundColor: 'rgba(0,135,127,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,0.8)',
        pointRadius: 4,
        fill: 'false',
        tension: 0.4,
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Expenses',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(244,86,128,1)',
        pointBackgroundColor: 'rgba(195,68,102,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,0.8)',
        pointRadius: 4,
        fill: 'false',
        tension: 0.4,
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#f0f2f5',
        titleColor: '#333',
        bodyColor: '#333',
        borderColor: '#ddd',
        borderWidth: 1,
        callbacks: {
          label: (context) => {
            const datasetLabel = context.dataset.label || '';
            const value = context.raw;
            return;
          },
          title: (items) => {
            return `Date: ${items[0].label}`;
          },
        },
        displayColors: false,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  };

  public lineChartType: ChartType = 'line';
}
