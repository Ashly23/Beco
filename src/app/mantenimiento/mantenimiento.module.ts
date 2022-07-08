import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { ConstanciaComponent } from './constancia/constancia.component';
import { HistoricoComponent } from './historico/historico.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReporteComponent } from './reporte/reporte.component';

@NgModule({
  declarations: [
    ConstanciaComponent,
    HistoricoComponent,
    ReporteComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    NzTableModule, 
    NzCardModule
  ], 
  exports: [
    ConstanciaComponent,
    HistoricoComponent
  ]
})
export class MantenimientoModule { }
