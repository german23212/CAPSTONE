import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lastValueFrom, map } from 'rxjs';
import { FirebaseError } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { IUsuario } from 'src/app/interfaces/db.interfaces';
import firebase from 'firebase/compat/app';
import { 
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User
} from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private storage:LocalStorageService,
    private alertCtrl: AlertController,
    private router:Router
  ) {
    this.afAuth.authState.subscribe(user => {
      this.userSubject.next(user);
    });
   }

  async register(email: string, password: string, role: string) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    const uid = credential.user?.uid;
    if (uid) {
      return this.firestore.doc(`usuarios/${uid}`).set({
        uid,
        role,
        email
      });
    }
  }

  async login(email: string, password: string): Promise<IUsuario> {

    return new Promise(async (resolve,reject)=>{

      this.afAuth.signInWithEmailAndPassword(email, password)
      .then( async (credential) => {

        const uid = credential.user?.uid;

        if (uid) {
          // Obtener el documento del usuario desde Firestore utilizando await
          const userDoc = await lastValueFrom(this.firestore.collection('usuarios').doc(uid).get())
          if (userDoc.exists) {
            // Extraer el rol del documento del usuario
            const userData:any = userDoc.data();
            const role = userData?.role;
  
            const user = {
              email: credential.user?.email as string,
              uid: credential.user?.uid as string,
              role: role,
              refreshToken:credential.user?.refreshToken
            };
  
            this.storage.setUsuarioActivo(user);
            resolve(user);
          } else {
            reject('No se encontró el documento del usuario en Firestore.') 
          }
        } else {
          reject('No se pudo obtener el UID del usuario.') 
        }
      })
      .catch((error:FirebaseError)=>{
        reject(error);
      })
    });
  }


  async confirmLogOut(){
    const alert = await this.alertCtrl.create({
      header: '¿Estás seguro de que quieres salir?',
      buttons: [{
        text: 'Si',
        handler: ()=>{
          this.logout();
        }
      },{
        text: 'Cancelar',
        role: 'cancel'
      }]
    });

    await alert.present();
  }

  async sendResetPasswordLink(email:string){
    this.afAuth.sendPasswordResetEmail(email.toLowerCase());
  }

  async logout() {
    await this.afAuth.signOut();
    this.storage.logOut();
    this.router.navigate(['auth','login']);
  }

  async googleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider);
      return result.user;
    } catch (error) {
      console.error('Error en login con Google:', error);
      throw error;
    }
  }

  async signOut() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.error('Error en logout:', error);
      throw error;
    }
  }

  isAuthenticated(): Observable<boolean> {
    return this.user$.pipe(
      map(user => user !== null)
    );
  }

  getCurrentUser() {
    return this.afAuth.currentUser;
  }

  getAuthState() {
    return this.afAuth.authState;
  }
}
