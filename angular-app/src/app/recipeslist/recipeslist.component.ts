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
    debugger; 
    this.recipesService.Getrecipes().subscribe(res => {
      debugger;
      console.log(res);
      this.recipe = res; 
    })
    this.recipesService.notify()
  }

}
