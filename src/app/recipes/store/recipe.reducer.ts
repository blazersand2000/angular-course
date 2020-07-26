import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.actions';

export interface State {
   recipes: Recipe[];
}

const initialState: State = {
   recipes: []
}

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions): State {
   switch (action.type) {
      case RecipeActions.SET_RECIPES:
         return {
            ...state,
            recipes: [...action.payload]
         };
      case RecipeActions.ADD_RECIPE:
         return {
            ...state,
            recipes: [...state.recipes, action.payload]
         };
      case RecipeActions.UPDATE_RECIPE:
         const recipesUpdate = [...state.recipes];
         recipesUpdate[action.payload.index] = action.payload.newRecipe;
         return {
            ...state,
            recipes: recipesUpdate
         };
      case RecipeActions.DELETE_RECIPE: 
      console.log(state.recipes.length + " recipes before deleting");
      console.log("State.recipes: " + state.recipes.toString());
      console.log(`Action: ${action.payload.toString()}`);
      const recipesDelete = [...state.recipes.filter((recipe, index) => {
            return index !== action.payload;
         })];
         if (recipesDelete === null) {
            console.log("recipes are null!!!")
         }
         console.log(recipesDelete.length + " recipes after deleting: " + recipesDelete);
         return {
            ...state,
            recipes: recipesDelete
         };
      default:
         return state;
   }
}