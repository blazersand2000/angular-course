import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, tap, withLatestFrom } from 'rxjs/operators';

import * as RecipesActions from './recipe.actions';
import * as fromApp from '../../store/app.reducer';
import { Recipe } from '../recipe.model';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeEffects {
   private readonly url = 'https://courseproject-aeae3.firebaseio.com/recipes.json'
   
   constructor(
      private actions$: Actions,
      private http: HttpClient,
      private store: Store<fromApp.AppState>
   ) {}
   
   @Effect()
   fetchRecipes = this.actions$.pipe(
      ofType(RecipesActions.FETCH_RECIPES),
      switchMap(() => {
         return this.http
         .get<Recipe[]>(this.url);
      }),
      map(recipes => {
         return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
         });
      }),
      map(recipes => {
         return new RecipesActions.SetRecipes(recipes);
      })
   );

   @Effect({dispatch: false})
   storeRecipes = this.actions$.pipe(
      ofType(RecipesActions.STORE_RECIPES),
      withLatestFrom(this.store.select('recipes')),
      switchMap(([actionData, recipesState]) => {
         return this.http
         .put(
           this.url, 
           recipesState.recipes
         );
      })
   )
}