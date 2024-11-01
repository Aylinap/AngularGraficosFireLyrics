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
        text: "Vistas por Día (Última Semana)",
        
      },
      
      data: [],
      series: [
        {
          type: "line",
          xKey: "dia",
          yKey: "totalVistas",
          yName: "Total de Vistas",
          tooltip: {
            renderer: (params) => {
              const date = new Date(params.datum.fecha);
              const hours = date.getHours();
              const minutes = date.getMinutes();
              return {
                content: `Día: ${params.datum.dia}<br/>Vistas: ${params.datum.totalVistas}<br/>`
              };
            }
          },
          stroke: "#ff4c4c", // Línea roja
          marker: {
            shape: "circle",
            size: 5,
            fill: "#ff4c4c", // Puntos rojos
            stroke: "#ff1a1a",
          },
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          title: { text: 'Día' }
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
    this.http.get<any[]>('https://localhost:7114/ControllerLogsPrincipal/vistas-por-dia')
      .subscribe(data => {
        console.log('Datos recibidos:', data);
        const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const dataMapeada = data.map(log => ({
          dia: diasDeLaSemana[new Date(log.fecha).getDay()],
          totalVistas: log.totalVistas,
          fecha: log.fecha
        }));

        this.chartOptions = {
          ...this.chartOptions,
          data: dataMapeada,
        };
        console.log('Opciones del grafico:', this.chartOptions);
      });
  }
}



