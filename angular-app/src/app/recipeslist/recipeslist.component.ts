import { Component, OnInit } from '@angular/core';
import { Recipesmodel } from '../models/recipesmodel';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.css']
})
export class RecipeslistComponent implements OnInit {
  recipe: Recipesmodel[];
  constructor(private recipesService: RecipesService) { 
    this.recipe = []
    
  }


  ngOnInit() {
    this.recipesService.Getrecipes().subscribe(res => {
      this.recipe = res 
      console.log(res);
    })
  }

}
