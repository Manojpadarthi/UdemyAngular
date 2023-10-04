import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();

   private ingredients :Ingredient[]=[
        new Ingredient('tomatoes',5),
        new Ingredient('brinjals',10)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }
    
 pushIngredient(ingredient:Ingredient){
    
   this.ingredients.push(ingredient);
   this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onGettingIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
}


}