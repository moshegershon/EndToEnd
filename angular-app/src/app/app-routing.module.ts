import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeslistComponent } from './recipeslist/recipeslist.component';
import { AddresipeComponent } from './addresipe/addresipe.component';
import { RecipesitemComponent } from './recipesitem/recipesitem.component';

const routes: Routes = [
  {path:'',component:HomeComponent, pathMatch: 'full'},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Recipes',component:RecipesComponent},
  {path:'Recipes/List',component:RecipeslistComponent},
  {path:'Recipes/Add',component:AddresipeComponent},
  {path:'Recipes/Item',component:RecipesitemComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
