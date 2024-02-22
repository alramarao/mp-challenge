import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'chocolates',
        pathMatch: 'full'
    },
    {
        path: 'chocolates', loadChildren: () => import('./chocolates/chocolates.routes').then(r=> r.ChocolateRoutes)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
