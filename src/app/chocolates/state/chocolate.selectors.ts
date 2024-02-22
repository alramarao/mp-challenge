import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChocolateState } from './chocolate.reducer';

export const selectChocolateFeature =
  createFeatureSelector<ChocolateState>('chocolate');

export const getChocolatesData = createSelector(
  selectChocolateFeature,
  (state) => state.chocolates.data
);

export const getChocolatesPagination = createSelector(
  selectChocolateFeature,
  (state) => state.chocolates.pagination
);

export const getChocolateDetails = (id: string) =>
  createSelector(selectChocolateFeature, (state) =>
    state.chocolates.data.find((chocolate) => chocolate.id === id)
  );

export const getChocolateResponse = createSelector(
  selectChocolateFeature,
  (state) => state.chocolateResponse
);
