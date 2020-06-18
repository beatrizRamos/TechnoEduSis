import { Component, OnInit } from '@angular/core';
import { Questao } from '../../entidades/questao';


@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css']
})
export class InserirComponent implements OnInit {
  novaQuestao : Questao;

  constructor() { 
    //this.novaQuestao = new Questao ();
  }


  ngOnInit(): void {
  }


}
