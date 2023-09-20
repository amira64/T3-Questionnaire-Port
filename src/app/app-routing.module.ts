import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './Selection/select.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './Questionnere/Questionnere.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path:'', component :SelectComponent},
  {path:'question/:id', component :QuestionComponent},
  {path:'result', component :ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
