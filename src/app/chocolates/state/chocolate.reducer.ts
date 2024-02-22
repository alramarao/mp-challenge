import { HttpErrorResponse } from '@angular/common/http';
import { ChocolatesTableList } from '../models';
import { createReducer, on } from '@ngrx/store';
import { ChocolateApiActions, ChocolatePageActions } from './actions';
import { getAveragePrice, getLowestPrice, getLowestPriceLink } from '../utils';

export interface State {
  chocolate: ChocolateState;
}

export interface ChocolateState {
  chocolates: ChocolatesTableList;
  chocolateResponse: boolean | unknown;
  error: HttpErrorResponse | unknown;
}

const initialState: ChocolateState = {
  chocolates: {
    pagination: {
      offset: 1,
      limit: 25,
      total: 0,
    },
    data: [],
  },
  chocolateResponse: undefined,
  error: undefined,
};

export const ChocolateReducer = createReducer<ChocolateState>(
  initialState,
  on(ChocolatePageActions.resetStateProperty, (state, action) => {
    return {
      ...state,
      [action.property]: initialState[action.property],
    };
  }),
  on(ChocolateApiActions.GET_CHOCOLATES_SUCCESS, (state, action) => {
    return {
      ...state,
      chocolates: {
        pagination: action.chocolates.pagination,
        data: action.chocolates.data.map((chocolate) => {
          return {
            ...chocolate,
            lowestPrice: getLowestPrice(chocolate.prices),
            averagePrice: getAveragePrice(chocolate.prices),
            directLink: getLowestPriceLink(chocolate.prices),
          };
        }),
      },
      error: initialState.error,
    };
  }),
  on(ChocolateApiActions.GET_CHOCOLATES_FAILURE, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ChocolateApiActions.UPDATE_CHOCOLATE_DETAILS_SUCCESS, (state) => {
    return {
      ...state,
      chocolateResponse: true,
    };
  }),
  on(ChocolateApiActions.UPDATE_CHOCOLATE_DETAILS_FAILURE, (state, action) => {
    return {
      ...state,
      chocolateResponse: false,
      error: action.error,
    };
  })
);
