import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReportePoliciaPageModule } from './vista-policia/reporte/reporte-policia/reporte-policia.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./General/home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./Ingresar/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'colaboradores',
    loadChildren: () => import('./General/colaboradores/colaboradores.module').then( m => m.ColaboradoresPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Ingresar/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./General/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'quienessomos',
    loadChildren: () => import('./General/quienessomos/quienessomos.module').then( m => m.QuienessomosPageModule)
  },
  {
    path: 'personas',
    loadChildren: () => import('./General/personas/personas.module').then( m => m.PersonasPageModule)
  },
  {
    path: 'chatbot',
    loadChildren: () => import('./General/chatbot/chatbot.module').then( m => m.ChatbotPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./Ingresar/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'reporte',
    loadChildren: () => import('./vista-policia/reporte/reporte-policia/reporte-policia.module').then( m => m.ReportePoliciaPageModule)
  },
  {
    path: 'visualizar',
    loadChildren: () => import('./vista-policia/visualizar/visualizar.module').then( m => m.VisualizarPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
