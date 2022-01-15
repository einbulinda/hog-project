import { createSelector } from "reselect";

// Get Products Data from state
export const selectProductsData = (state) => state.productsData;

export const selectProducts = createSelector(
  [selectProductsData],
  (productsArray) => productsArray.products
);
