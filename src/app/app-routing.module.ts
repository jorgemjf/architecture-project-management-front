import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detalles-proyecto',
    loadChildren: () => import('./detalles-proyecto/detalles-proyecto.module').then( m => m.DetallesProyectoPageModule)
  },
  {
    path: 'detalles-tareas',
    loadChildren: () => import('./detalles-tareas/detalles-tareas.module').then( m => m.DetallesTareasPageModule)
  },
  {
    path: 'anyadir-proyecto',
    loadChildren: () => import('./anyadir-proyecto/anyadir-proyecto.module').then( m => m.AnyadirProyectoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
