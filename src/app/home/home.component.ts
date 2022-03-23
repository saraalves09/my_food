import { Component, OnInit } from '@angular/core';

const LISTA_DE_PESSOAS = [
  {
    id: 1,
    nome:'Hellen',
    cpf: '12345678974',
    foto: '../assets/img/1.jpeg'
  },
  {
    id: 2,
    nome:'Ana',
    cpf: '15247899999',
    foto: '../assets/img/2.jpeg'
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPessoas = LISTA_DE_PESSOAS;
  constructor() { }

  ngOnInit(): void {

  }

}
