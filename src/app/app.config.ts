import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { interceptorProviders } from './interceptors';
import { ChocolateEffects, ChocolateReducer } from './chocolates/state';
import { provideState, provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors(interceptorProviders)),
    provideEffects(ChocolateEffects),
    provideStore(),
    provideState({name: 'chocolate', reducer: ChocolateReducer}),
  ]
};
