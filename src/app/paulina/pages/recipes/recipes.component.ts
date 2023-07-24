import { Component, computed, inject } from '@angular/core';
import { PaulinaService } from '../../services/paulina.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipesService = inject(PaulinaService)
  colors = ['primary','secondary','success','danger','warning']

  constructor() {
  }

  get recipes() {
    return this.recipesService.recipes
  }

  get pagination() {
    return {
      rowInit: this.recipesService.rowInit,
      endRow: computed(()=>this.recipesService.rowInit() + this.recipesService.itemsPerPage()),
      page: this.recipesService.page,
      items: this.recipesService.itemsPerPage,
      total: this.recipesService.recipes.length,
    }
  }

  get color() {
    return `bg-${this.colors[Math.round(Math.random()*4)]}`
  }

}
