import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstanciaComponent } from './constancia/constancia.component';
import { HistoricoComponent } from './historico/historico.component';

const routes: Routes = [
  { path: 'constancia', component: ConstanciaComponent },
  { path: 'historico', component: HistoricoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
