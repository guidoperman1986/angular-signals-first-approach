import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaulinaRoutingModule } from './paulina-routing.module';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    PaulinaRoutingModule,
    HttpClientModule
  ]
})
export class PaulinaModule { }
