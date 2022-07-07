import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constancia',
  templateUrl: './constancia.component.html',
  styleUrls: ['./constancia.component.css']
})
export class ConstanciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  
  listOfColumn = [
    {
      title: 'Medicion',
      medicion: 'aaa'
    },
    {
      title: 'Lectura Anterior',
    },
    {
      title: 'Lecturas Actual',
    },
    {
      title: 'Roll Over',
    },
    {
      title: 'Diferencia',
    }
  ];

  listOfColumn2 = [
    {
      title: 'Medicion',
    },
    {
      title: 'Consumo',
    }
  ];
  
}


