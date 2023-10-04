import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [new Recipe('making sambar', 'how to make samabar', 'https://www.cookwithmanali.com/wp-content/uploads/2019/05/Sambar-Recipe.jpg'
   ,[new Ingredient('turmeric',1), new Ingredient('dal',1)])
];

recipeSelected=new EventEmitter<Recipe>();
constructor(private slService:ShoppingListService){

}
 
getRecipes():Recipe[]{
    return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients:Ingredient[]){
  this.slService.onGettingIngredients(ingredients);
}

}