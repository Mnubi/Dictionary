import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { WordComponent }  from './word/word.component' ;

const routes: Routes = [
  {path: '',component:WordComponent},
  {path: 'dictionary',component:DictionaryComponent},
  {path: 'word',component:WordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
