import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '',component:DictionaryComponent},
  {path: 'Navbar',component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
