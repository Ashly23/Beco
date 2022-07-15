import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

interface DataItem {
  periodo: string;
}

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  selectedValue = null;
  size: NzButtonSize = 'large';

  constructor() { }

  ngOnInit(): void {
  }
  
  visible = false;
  placement: NzDrawerPlacement = 'right';

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  

}
