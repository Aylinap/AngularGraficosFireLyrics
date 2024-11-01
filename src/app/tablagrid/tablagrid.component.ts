import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; 
import { ColDef } from 'ag-grid-community';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-tablagrid',
  standalone: true,
  imports: [AgGridAngular, HttpClientModule],
  template: `
    <ag-grid-angular
      class="ag-theme-quartz"
      style="height: 500px; width: 100%;"
      [rowData]="rowData"
      [columnDefs]="colDefs"
      [domLayout]="'autoHeight'">
    </ag-grid-angular>
  `,
  styleUrls: ['./tablagrid.component.css']
})
export class TablagridComponent implements OnInit {
  rowData: any[] = [];

  colDefs: ColDef[] = [
    { field: "id_usuario", headerName: "ID Usuario" },
    { field: "ventana", headerName: "Ventana" },
    { field: "fecha", headerName: "Fecha" },
    { field: "id_adress", headerName: "IP Address" },
    { field: "id_session", headerName: "Session ID" },
    { field: "username", headerName: "Nombre de Usuario" }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://localhost:7114/ControllerLogsPrincipal/ultimos-usuarios')
      .subscribe(data => {
        this.rowData = data;
        console.log(data);
      });
  }
}
