import { Injectable } from '@angular/core';
import { Questao } from '../entidades/questao';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {
  questoes: Questao[] = [];

  constructor() { }

  inserir(questao : Questao){
  this.questoes.push(questao);
  alert(questao.disciplina);
  }
}
