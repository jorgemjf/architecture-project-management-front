import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnyadirProyectoPage } from './anyadir-proyecto.page';

const routes: Routes = [
  {
    path: '',
    component: AnyadirProyectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnyadirProyectoPageRoutingModule {}
