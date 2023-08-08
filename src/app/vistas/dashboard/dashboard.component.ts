import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { listaVillasI } from '../../modelos/listaVillas.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  villas: listaVillasI[] = []; // Asignar un arreglo vacío como valor inicial

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getVillas().subscribe(response => {
      this.villas = response.resultado; // Asignar los datos obtenidos a "villas"
    });
  }
}
