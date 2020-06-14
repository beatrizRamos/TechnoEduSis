import { Component, OnInit } from '@angular/core';
import { Questao } from '../../entidades/questao'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  questao : Questao;


  constructor() { 
    this.questao = new Questao ();
  }

  ngOnInit(): void {
  }

}
