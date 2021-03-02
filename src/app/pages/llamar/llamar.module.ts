import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlamarPageRoutingModule } from './llamar-routing.module';

import { LlamarPage } from './llamar.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlamarPageRoutingModule,
    ComponentesModule

  ],
  declarations: [LlamarPage]
})
export class LlamarPageModule {}
