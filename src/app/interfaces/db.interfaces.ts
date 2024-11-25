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

export interface IReporteFireBase{
  pid?: string,
  title: string,
  address: string,
  lat: number,
  lng: number,
}

export interface IReporte{
  pid?: string,
  title: string,
  address: string,
  lat: number,
  lng: number,
  distance?: number
}