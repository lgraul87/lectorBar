import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompartirPageRoutingModule } from './compartir-routing.module';

import { CompartirPage } from './compartir.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompartirPageRoutingModule,
    ComponentesModule
  ],
  declarations: [CompartirPage]
})
export class CompartirPageModule {}
