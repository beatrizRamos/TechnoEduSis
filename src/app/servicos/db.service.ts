import { Injectable } from '@angular/core';
import { Questao } from '../entidades/questao';
import {AngularFireDatabase } from '@angular/fire/database';
//import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private db : AngularFireDatabase) { }

  insert(questao:Questao){
    this.db.list('questao').push(questao)
    .then((result:any) => {
      console.log(result.key);
    });

  }

  update(questao:Questao, key:string){
    this.db.list('questao').update(key,questao)
    .catch((error: any) => {
      console.error(error);
      });
  }
/*
  getAll(){
    return this.db.list('questao')
    .snapshotChanges()
    .pipe{
      map(changes => {
        return changes.map(q -> ({ key : q.payload.key, ...q.payload.val() }));

      })
      );
    }

  delete(key:string){
    }
    */
}

