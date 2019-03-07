import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipesmodel } from '../models/recipesmodel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private httpClient: HttpClient) { }

  onClick(r: Recipesmodel): Observable <string> {
    console.log(r);
    return this.httpClient.post<string>('http://localhost:8888/Recipes', r);
  }

 Getrecipes(): Observable <Recipesmodel[]>{ 
    // console.log();
    return this.httpClient.get<Recipesmodel[]>('http://localhost:8888/Recipes');
}
}
