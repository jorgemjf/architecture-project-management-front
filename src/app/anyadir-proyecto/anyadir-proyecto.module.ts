import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnyadirProyectoPageRoutingModule } from './anyadir-proyecto-routing.module';

import { AnyadirProyectoPage } from './anyadir-proyecto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnyadirProyectoPageRoutingModule
  ],
  declarations: [AnyadirProyectoPage]
})
export class AnyadirProyectoPageModule {}
