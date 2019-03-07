import { Component, OnInit } from '@angular/core';
import { Recipesmodel } from '../models/recipesmodel';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit() {
  }

}
