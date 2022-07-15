import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { ConstanciaComponent } from './constancia/constancia.component';
import { HistoricoComponent } from './historico/historico.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReporteComponent } from './reporte/reporte.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzRadioModule } from 'ng-zorro-antd/radio';

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
    NzCardModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
    NzRadioModule,
    NzDrawerModule
  ], 
  exports: [
    ConstanciaComponent,
    HistoricoComponent,
    ReporteComponent
  ]
})
export class MantenimientoModule { }
