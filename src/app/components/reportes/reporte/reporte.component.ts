import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/services/reportes/reporte.service';
import { Reporte } from 'src/app/interfaces/db.interfaces';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
})
export class ReporteComponent  implements OnInit {

  reporte:Reporte = {titulo:"", date: new Date(), content:"", address:"", lat: 0, lng: 0}

  constructor(private reporteService:ReporteService) { }

  ngOnInit() {}

  addReporte(){
    this.reporteService.addReporte(this.reporte).then(()=>{
      alert("Agregado Correctamente")
      this.reporte = {titulo:"", date: new Date(), content:"", address:"", lat: 0, lng: 0 }

    }).catch(error=>{alert("error al agregar"+error)});
    
  }

}
