import { Component, OnInit } from '@angular/core';

interface DataItem {
  fecha: string;
  entregadaAct: number;
  recibidoAct: number;
  entregadaReact: number;
  recibidaReact: number;
  potenciaAct: number;
  potenciaReact: number;
  demandaPot: number;
}

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listOfData: DataItem[] = [
    {
      fecha: '23 febrero',
      entregadaAct: 1,
      recibidoAct: 2,
      entregadaReact: 3,
      recibidaReact: 4,
      potenciaAct: 5,
      potenciaReact: 6,
      demandaPot: 7,
    }
  ];
}
