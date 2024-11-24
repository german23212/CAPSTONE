import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { Reporte } from 'src/app/interfaces/db.interfaces';




@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private collectionName="reporte";
  constructor(private firestore:AngularFirestore) { }

  addReporte(reporte:Reporte): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection<Reporte>(this.collectionName).doc(id).set({...reporte,id})

  }

  getReporte():Observable<Reporte[]>{
    return this.firestore.collection<Reporte>(this.collectionName).valueChanges();
  }
}
