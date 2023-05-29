import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients :Ingredient[]=[
    new Ingredient('tomatoes',5),
    new Ingredient('brinjals',10)
  ];

  constructor() { }

  ngOnInit(): void {
  }
  pushIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);

  }

}
