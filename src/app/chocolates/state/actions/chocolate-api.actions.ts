import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Chocolate, ChocolatesTableList } from '../../models';

export const GET_CHOCOLATES_SUCCESS = createAction(
	'[Chocolates Overview Api] GET_CHOCOLATES_SUCCESS',
	props<{ chocolates: ChocolatesTableList }>()
);
export const GET_CHOCOLATES_FAILURE = createAction(
	'[Chocolates Overview Api] GET_CHOCOLATES_FAILURE',
	props<{ error: HttpErrorResponse }>()
);

export const UPDATE_CHOCOLATE_DETAILS_SUCCESS = createAction(
	'[Chocolates Details Api] UPDATE_CHOCOLATE_DETAILS_SUCCESS',
	props<{ chocolate: Chocolate }>()
);
export const UPDATE_CHOCOLATE_DETAILS_FAILURE = createAction(
	'[Chocolates Details Api] UPDATE_CHOCOLATE_DETAILS_FAILURE',
	props<{ error: HttpErrorResponse }>()
);