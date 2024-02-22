import { createAction } from "@ngrx/store";
import { Chocolate } from "../../models";
import { ChocolateState } from "../chocolate.reducer";

export const resetStateProperty = createAction(
	'[Chocolate State] Reset State Property',
	(property: keyof ChocolateState) => ({property})
);

export const GET_CHOCOLATES_REQUEST = createAction(
	'[Chocolates Overview Page] GET_CHOCOLATES_REQUEST',
	(pageNo: number) => ({ pageNo })
);

export const UPDATE_CHOCOLATE_DETAILS_REQUEST = createAction(
	'[Chocolate Details Page] UPDATE_CHOCOLATE_DETAILS_REQUEST',
	(id: string, payload: Partial<Chocolate>) => ({id, payload})
);