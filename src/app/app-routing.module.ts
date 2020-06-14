import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InserirComponent } from './questao/inserir/inserir.component';


const routes: Routes = [{
  path: '',
  component: InserirComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
