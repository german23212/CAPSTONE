import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReporteService } from 'src/app/services/reportes/reporte.service';
import { Reporte } from 'src/app/interfaces/db.interfaces';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
})
export class ReporteComponent implements OnInit, OnDestroy {

  reporte: Reporte = { 
    titulo: "", 
    date: new Date(),  // Inicializamos con la fecha actual
    content: "", 
    address: "", 
    lat: 0, 
    lng: 0 
  };

  private dateInterval: any;

  constructor(private reporteService: ReporteService) { }

  ngOnInit() {
    // Actualizar la fecha y hora cada segundo
    this.dateInterval = setInterval(() => {
      this.reporte.date = new Date(); // Actualiza la fecha y hora cada segundo
    }, 1000);
  }

  ngOnDestroy() {
    // Limpiar el intervalo cuando el componente se destruya para evitar fugas de memoria
    if (this.dateInterval) {
      clearInterval(this.dateInterval);
    }
  }

  addReporte() {
    this.reporteService.addReporte(this.reporte).then(() => {
      alert("Agregado Correctamente");
      // Limpiar los campos después de enviar
      this.reporte = { 
        titulo: "", 
        date: new Date(), 
        content: "", 
        address: "", 
        lat: 0, 
        lng: 0 
      };
    }).catch(error => {
      alert("Error al agregar: " + error);
    });
  }
}
