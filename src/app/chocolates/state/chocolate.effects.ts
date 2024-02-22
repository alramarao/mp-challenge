import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ChocolateApiActions, ChocolatePageActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ChocolateService } from '../services/chocolate.service';

@Injectable()
export class ChocolateEffects {
  constructor(
    private actions$: Actions,
    private chocolateService: ChocolateService
  ) {}

  getChocolates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChocolatePageActions.GET_CHOCOLATES_REQUEST),
      switchMap((payload) =>
        this.chocolateService.getChocolates(payload.pageNo).pipe(
          map((chocolates) =>
            ChocolateApiActions.GET_CHOCOLATES_SUCCESS({ chocolates })
          ),
          catchError((error) =>
            of(ChocolateApiActions.GET_CHOCOLATES_FAILURE({ error }))
          )
        )
      )
    );
  });

  updateChocolate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChocolatePageActions.UPDATE_CHOCOLATE_DETAILS_REQUEST),
      switchMap((payload) =>
        this.chocolateService.updateChocolate(payload.id, payload.payload).pipe(
          map((chocolate) =>
            ChocolateApiActions.UPDATE_CHOCOLATE_DETAILS_SUCCESS({ chocolate })
          ),
          catchError((error) =>
            of(ChocolateApiActions.UPDATE_CHOCOLATE_DETAILS_FAILURE({ error }))
          )
        )
      )
    );
  });
}
