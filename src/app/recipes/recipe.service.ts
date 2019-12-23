import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel', 
      'A super-tasty Schnitzel - just awesome!', 
      'https://cdn.pixabay.com/photo/2016/11/19/02/22/schnipo-1837703_960_720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Big Fat Burger', 
      'What else do you need to say?', 
      'https://cdn.pixabay.com/photo/2019/04/24/12/11/burger-4152013_960_720.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    ),
    new Recipe(
      'Cobb Salad', 
      'A classic salad loaded with goodies.', 
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Cobb_salad%2C_15_October_2010.jpg',
      [
        new Ingredient('Lettuce', 5),
        new Ingredient('Bacon', 1),
        new Ingredient('Hard-Boiled Egg', 1),
        new Ingredient('Tomato', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    //return a copy of the array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}