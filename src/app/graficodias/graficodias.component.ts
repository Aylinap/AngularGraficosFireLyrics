import { Component, OnInit } from "@angular/core";
import { AgChartOptions } from "ag-charts-community";
import { AgChartsModule } from "ag-charts-angular";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-graficodias',
  standalone: true,
  imports: [ AgChartsModule, HttpClientModule ],
  template: `<ag-charts [options]="chartOptions"></ag-charts>`,
})
export class GraficodiasComponent implements OnInit {
  public chartOptions: AgChartOptions;

  constructor(private http: HttpClient) {
    this.chartOptions = {
      title: {
        text: "Páginas Más Vistas",
      },
      data: [],
      series: [
        {
          // tipo de grafico "bar"
          type: 'bar',
          xKey: 'ventana',
          yKey: 'totalVistas',
          yName: 'Total de Vistas',
          fill: 'red',
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          title: { text: 'Ventana' }
        },
        {
          type: 'number',
          position: 'left',
          title: { text: 'Total de Vistas' },
          
        }
      ]
    };
  }

  ngOnInit() {
    this.http.get<any[]>('https://localhost:7114/ControllerLogsPrincipal/paginas-mas-vistas')
      .subscribe(data => {
        console.log(data); 

        this.chartOptions = {
          ...this.chartOptions,
          data: data,
        };
      });
  }
}



