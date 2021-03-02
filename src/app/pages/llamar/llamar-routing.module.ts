import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LlamarPage } from './llamar.page';

const routes: Routes = [
  {
    path: '',
    component: LlamarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LlamarPageRoutingModule {}
