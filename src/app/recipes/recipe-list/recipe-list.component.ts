import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('making sambar', 'how to make samabar', 'https://www.cookwithmanali.com/wp-content/uploads/2019/05/Sambar-Recipe.jpg')
  ];

  @Output() selectedRecipeWas = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipeWas.emit(recipe);

  }

}
