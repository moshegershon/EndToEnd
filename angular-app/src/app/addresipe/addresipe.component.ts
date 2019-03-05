import { Component, OnInit } from '@angular/core';
import { Recipesmodel } from '../models/recipesmodel';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-addresipe',
  templateUrl: './addresipe.component.html',
  styleUrls: ['./addresipe.component.css']
})
export class AddresipeComponent implements OnInit {
  recipe: Recipesmodel;
  constructor(private recipesService: RecipesService) {
    this.recipe = {
      name: '',
      insraction: '',
    };
  }

  ngOnInit() {
  }
  onClick() {
  this.recipesService.onClick(this.recipe).subscribe()
  }
}
