import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

import * as pizzasActions from "../actions/pizzas.actions";
import * as fromServices from "../../services";

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzasActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService
        .getPizzas()
        .pipe(
          map(pizzas => new pizzasActions.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new pizzasActions.LoadPizzasFail(error)))
        );
    })
  );

  @Effect()
  createPizza$ = this.actions$.ofType(pizzasActions.CREATE_PIZZA).pipe(
    map((action: pizzasActions.CreatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService
        .createPizza(pizza)
        .pipe(
          map(pizza => new pizzasActions.CreatePizzaSuccess(pizza)),
          catchError(error => of(new pizzasActions.CreatePizzaFail(error)))
        );
    })
  );

  @Effect()
  updatePizza$ = this.actions$.ofType(pizzasActions.UPDATE_PIZZA).pipe(
    map((action: pizzasActions.UpdatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService
        .updatePizza(pizza)
        .pipe(
          map(pizza => new pizzasActions.UpdatePizzaSuccess(pizza)),
          catchError(error => of(new pizzasActions.UpdatePizzaFail(error)))
        );
    })
  );
}
