import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenerDocenteComponent } from './mantener-docente.component';

const routes: Routes = [
  {
    path: '',
    component: MantenerDocenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenerDocenteRoutingModule { }
