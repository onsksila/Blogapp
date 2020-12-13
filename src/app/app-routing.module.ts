import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {ListeArticlesComponent} from './liste-articles/liste-articles.component';
import {UpdateArticalsComponent} from './update-articals/update-articals.component';
import {PageAccueilComponent} from './page-accueil/page-accueil.component';

const routes: Routes = [
  {path: '' , component: PageAccueilComponent, children: [
      {path: 'Blog', component: ListeArticlesComponent, children:
          [{path: 'Blog/formulaire', component: FormulaireComponent},
          ]},
      {path: 'update/:id', component: UpdateArticalsComponent}
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
