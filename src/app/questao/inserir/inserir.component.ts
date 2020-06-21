import { Component, OnInit } from '@angular/core';
import { Questao } from '../../entidades/questao';
import { QuestaoService } from 'src/app/servicos/questao.service';
import { DbService } from 'src/app/servicos/db.service';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css'],
})
export class InserirComponent implements OnInit {
  novaQuestao: Questao;

  constructor(private questaoService: QuestaoService, private dbService: DbService) {
  }


  ngOnInit() {
    this.novaQuestao = new Questao();
  }
  onSubmit() {
    this.questaoService.insert(this.novaQuestao)
    this.novaQuestao = new Questao ();
  }

}
