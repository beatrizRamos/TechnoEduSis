import { Injectable } from '@angular/core';
import { Questao } from '../../app/entidades/questao';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  constructor(private db: AngularFireDatabase) { }

  
  insert(questao:Questao){
    this.db.list('questao').push(questao);
    /*
    .then((result:any) => {
      console.log(result.key);
    });*/

  }
}
