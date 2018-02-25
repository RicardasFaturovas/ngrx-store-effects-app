import { createSelector } from "@ngrx/store/src/selector";

import * as fromRoute from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromToppings from "../reducers/toppings.reducer";

export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductState) => state.toppings
);

export const getToppingsEntites = createSelector(
  getToppingsState,
  fromToppings.getToppingEntites
);

export const getAllToppings = createSelector(getToppingsEntites, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getToppingsLoaded = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  fromToppings.getToppingsLoading
);
