import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild ('nameInput',{static:false}) nameInputRef: ElementRef;
  @ViewChild ('amountInput',{static:false}) amountInputRef:ElementRef;
  //@Output() ingredientEmitter = new EventEmitter<Ingredient>();
   
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }


  addIngredients(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    let ingredientAdded: Ingredient;
    if(ingName!==''&&ingAmount!==''){
       ingredientAdded=new Ingredient(ingName,ingAmount);
       this.shoppingListService.pushIngredient(ingredientAdded);
       
     }
    
   }
}
