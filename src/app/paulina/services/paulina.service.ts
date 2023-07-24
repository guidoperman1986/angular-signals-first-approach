import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../interfaces/paulina.interface';

@Injectable({
  providedIn: 'root'
})
export class PaulinaService {
  baseUrl = 'https://www.paulinacocina.net/wp-json/wp/v2/posts?categories=40&per_page=100'

  recipes = signal<Recipe[]>([]);
  rowInit = signal<number>(0);
  page = signal<number>(1);
  itemsPerPage = signal<number>(10);

  constructor(private http: HttpClient) { 
    this.loadRecipes();
  }

  loadRecipes() {
    this.http.get<Recipe[]>(this.baseUrl).subscribe(recipes => {
      console.log(recipes);
      this.recipes.set(recipes);
    })
  }
}
