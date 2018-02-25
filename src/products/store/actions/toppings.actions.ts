import { Action } from "@ngrx/store";

import { Topping } from "./../../models/topping.model";

export const LOAD_TOPPINGS = "[Products]: Load Toppings";
export const LOAD_TOPPINGS_SUCCESS = "[Products]: Load Toppings Success";
export const LOAD_TOPPINGS_FAIL = "[Products]: Load Toppings Fail";

export const VISUALISE_TOPPINGS = '[Producs]: Visualise toppings'

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Topping[]) {}
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}

export class VisualiseToppings implements Action {
  readonly type = VISUALISE_TOPPINGS;
  constructor(public payload: number[]) {}
}

// action types
export type ToppingsAction =
  | LoadToppings
  | LoadToppingsSuccess
  | LoadToppingsFail
  | VisualiseToppings;
