import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';
import { GraficodiasComponent } from "./graficodias/graficodias.component";
import { GraficoventanasComponent } from "./graficoventanas/graficoventanas.component";
import { TablagridComponent } from "./tablagrid/tablagrid.component";
import { AgChartsModule } from "ag-charts-angular";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GraficodiasComponent, GraficoventanasComponent, TablagridComponent, AgChartsModule, AgCharts],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title="Gráficos Firelyrics";
}