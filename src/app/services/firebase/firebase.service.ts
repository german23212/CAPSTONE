import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize, lastValueFrom, map, Observable} from 'rxjs';
import { IReporteFireBase, IReporte} from 'src/app/interfaces/db.interfaces';
import { Timestamp } from 'firebase/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private puntosReporte$!: Observable<IReporteFireBase[]>;
  private puntosReporteCollection = this.firestore.collection<IReporteFireBase>('Lugar de reporte');
 
  constructor(private firestore: AngularFirestore,
    private storage: AngularFireStorage) {}


  getPuntosReciclaje(): Observable<IReporteFireBase[]> {
    //OBTENEMOS LOS PUNTOS DE RECICLAJE Y LO MAPEAMOS AL OBSERVABLE
    return this.puntosReporte$ = this.puntosReporteCollection.valueChanges();
  }
  addPuntoReporte(puntoReporte:IReporte): Promise<void>{
    // AÑADIMOS UN NUEVO ELEMENTO A LA COLECCION Y GENERAMOS EL ID AUTOMATICO
    return this.puntosReporteCollection.add(puntoReporte)
      .then(docRef => {
        // ACTUALIZAMOS EL ITEM AÑADIENDO EL ID A LOS CAMPOS
        const updatedPunto = {
          ...puntoReporte,
          pid: docRef.id //
        };

        // ACTUALIZAMOS EL ELEMENTO AÑADIENDO EL ID
        return docRef.update(updatedPunto);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  }
  deletePuntoReporteById(id:string): Promise<void> {
    return this.puntosReporteCollection.doc(id).delete();
  }

}
