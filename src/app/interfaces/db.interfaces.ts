import { Timestamp } from "firebase/firestore";


export interface IUsuario{
  uid: string,
  email: string,
  role: string
}

export interface Reporte{
  id?:string;
  titulo:string;
  date: Date;
  content:string;
  address:string;
  lat: number;
  lng: number;
}
