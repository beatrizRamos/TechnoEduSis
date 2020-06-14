import { Component, OnInit } from '@angular/core';
import { Questao } from '../../entidades/questao';
import { QuestaoService} from '../../servicos/questao.service'

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css']
})
export class InserirComponent implements OnInit {
  novaQuestao : Questao;

  constructor(private questaoService: QuestaoService) { 
    this.novaQuestao = new Questao ();
  }


  ngOnInit(): void {
  }

  cadastrar() {
    this.questaoService.inserir(this.novaQuestao);
  }


}
